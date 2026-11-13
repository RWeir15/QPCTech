const RESPONSE_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store, max-age=0",
  "CDN-Cache-Control": "no-store",
  "Cloudflare-CDN-Cache-Control": "no-store",
};

const FIELD_MASK = [
  "rating",
  "userRatingCount",
  "googleMapsUri",
  "reviews.authorAttribution",
  "reviews.googleMapsUri",
  "reviews.rating",
  "reviews.relativePublishTimeDescription",
  "reviews.text",
  "reviews.originalText",
  "reviews.publishTime",
].join(",");

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: RESPONSE_HEADERS,
  });
}

function cleanText(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function safeGoogleMapsUrl(value) {
  if (typeof value !== "string") return null;

  try {
    const url = new URL(value);
    const isGoogleDomain =
      url.hostname === "google.com" || url.hostname.endsWith(".google.com");

    return url.protocol === "https:" && isGoogleDomain ? url.toString() : null;
  } catch {
    return null;
  }
}

function safeGooglePhotoUrl(value) {
  if (typeof value !== "string") return null;

  try {
    const url = new URL(value);
    const isGooglePhotoDomain =
      url.hostname === "googleusercontent.com" ||
      url.hostname.endsWith(".googleusercontent.com") ||
      url.hostname === "ggpht.com" ||
      url.hostname.endsWith(".ggpht.com");

    return url.protocol === "https:" && isGooglePhotoDomain
      ? url.toString()
      : null;
  } catch {
    return null;
  }
}

function normalizeReview(review) {
  if (!review || typeof review !== "object") return null;

  const attribution = review.authorAttribution;
  const name = cleanText(attribution?.displayName, 120);
  const text = cleanText(review.text?.text, 6000);
  const stars = Number(review.rating);
  const googleMapsUri = safeGoogleMapsUrl(review.googleMapsUri);

  if (!name || !text || !googleMapsUri || !Number.isFinite(stars) || stars < 1 || stars > 5) {
    return null;
  }

  const originalText = cleanText(review.originalText?.text, 6000);

  return {
    name,
    authorUri: safeGoogleMapsUrl(attribution?.uri),
    photoUri: safeGooglePhotoUrl(attribution?.photoUri),
    date: cleanText(review.relativePublishTimeDescription, 100),
    stars: Math.round(stars),
    text,
    originalText: originalText && originalText !== text ? originalText : null,
    googleMapsUri,
  };
}

export async function onRequestGet({ env }) {
  const apiKey = typeof env?.GOOGLE_API_KEY === "string" ? env.GOOGLE_API_KEY.trim() : "";
  const placeId =
    typeof env?.GOOGLE_PLACE_ID === "string" ? env.GOOGLE_PLACE_ID.trim() : "";

  if (!apiKey || !placeId) {
    return jsonResponse({ error: "Google reviews are not configured." }, 503);
  }

  if (!/^[A-Za-z0-9._:-]{1,256}$/.test(placeId)) {
    return jsonResponse({ error: "Google reviews are not configured." }, 503);
  }

  const url = new URL(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
  );

  try {
    const response = await fetch(url, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": FIELD_MASK,
      },
    });

    if (!response.ok) {
      console.error("Google Places request failed with status", response.status);
      return jsonResponse({ error: "Google reviews are temporarily unavailable." }, 502);
    }

    const place = await response.json();
    if (!place || typeof place !== "object" || Array.isArray(place)) {
      return jsonResponse({ error: "Google reviews are temporarily unavailable." }, 502);
    }

    const rating = Number(place.rating);
    const totalReviews = Number(place.userRatingCount);
    const reviews = Array.isArray(place.reviews)
      ? place.reviews.map(normalizeReview).filter(Boolean).slice(0, 3)
      : [];

    return jsonResponse({
      rating: Number.isFinite(rating) && rating >= 1 && rating <= 5 ? rating : null,
      totalReviews:
        Number.isInteger(totalReviews) && totalReviews >= 0 ? totalReviews : null,
      googleMapsUri: safeGoogleMapsUrl(place.googleMapsUri),
      reviewOrder: "relevance",
      reviews,
    });
  } catch {
    return jsonResponse({ error: "Google reviews are temporarily unavailable." }, 502);
  }
}
