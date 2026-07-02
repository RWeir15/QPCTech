const PLACE_SEARCH_URL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json";
const PLACE_DETAILS_URL = "https://maps.googleapis.com/maps/api/place/details/json";
const CACHE_TTL = 60 * 60 * 6; // 6 hours

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

async function resolvePlaceId(apiKey, cache) {
  const cacheKey = new Request("https://internal/place-id");
  const cached = await cache.match(cacheKey);
  if (cached) return cached.text();

  const url = new URL(PLACE_SEARCH_URL);
  url.searchParams.set("input", "QPCTech 37 Waldron St Hillsdale MI");
  url.searchParams.set("inputtype", "textquery");
  url.searchParams.set("fields", "place_id");
  url.searchParams.set("key", apiKey);

  const res = await fetch(url.toString());
  const data = await res.json();
  if (!data.candidates?.length) throw new Error("Place not found");

  const placeId = data.candidates[0].place_id;
  await cache.put(
    cacheKey,
    new Response(placeId, {
      headers: { "Cache-Control": `public, max-age=${CACHE_TTL * 2}` },
    }),
  );
  return placeId;
}

async function fetchReviews(apiKey, placeId) {
  const url = new URL(PLACE_DETAILS_URL);
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "rating,user_ratings_total,reviews");
  url.searchParams.set("reviews_sort", "newest");
  url.searchParams.set("key", apiKey);

  const res = await fetch(url.toString());
  const data = await res.json();
  const r = data.result ?? {};

  return {
    rating: r.rating ?? 4.7,
    total: r.user_ratings_total ?? 0,
    reviews: (r.reviews ?? []).map((rv) => ({
      name: rv.author_name,
      date: rv.relative_time_description,
      stars: rv.rating,
      text: rv.text,
      profilePhoto: rv.profile_photo_url ?? null,
      time: rv.time,
    })),
  };
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    const apiKey = env.GOOGLE_PLACES_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API key not configured" }), {
        status: 503,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }

    const cache = caches.default;
    const cacheKey = new Request(request.url);
    const cached = await cache.match(cacheKey);
    if (cached) {
      const body = await cached.json();
      return new Response(JSON.stringify(body), {
        headers: { ...CORS_HEADERS, "Content-Type": "application/json", "X-Cache": "HIT" },
      });
    }

    try {
      const placeId = env.GOOGLE_PLACE_ID
        ? env.GOOGLE_PLACE_ID
        : await resolvePlaceId(apiKey, cache);

      const reviews = await fetchReviews(apiKey, placeId);

      const response = new Response(JSON.stringify(reviews), {
        headers: {
          ...CORS_HEADERS,
          "Content-Type": "application/json",
          "Cache-Control": `public, max-age=${CACHE_TTL}`,
          "X-Cache": "MISS",
        },
      });

      await cache.put(cacheKey, response.clone());
      return response;
    } catch (err) {
      return new Response(JSON.stringify({ error: String(err) }), {
        status: 500,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }
  },
};
