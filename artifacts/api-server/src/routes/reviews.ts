import { Router } from "express";

const router: Router = Router();

let _cachedPlaceId: string | null = null;

async function resolvePlaceId(apiKey: string): Promise<string> {
  if (_cachedPlaceId) return _cachedPlaceId;
  const url = new URL(
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json",
  );
  url.searchParams.set("input", "QPCTech 37 Waldron St Hillsdale MI");
  url.searchParams.set("inputtype", "textquery");
  url.searchParams.set("fields", "place_id");
  url.searchParams.set("key", apiKey);
  const res = await fetch(url.toString());
  const data = (await res.json()) as {
    candidates?: Array<{ place_id: string }>;
  };
  if (!data.candidates?.length) throw new Error("QPCTech place not found");
  _cachedPlaceId = data.candidates[0].place_id;
  return _cachedPlaceId;
}

router.get("/reviews", async (req, res) => {
  const apiKey = process.env["GOOGLE_PLACES_API_KEY"];
  if (!apiKey) {
    res.status(503).json({ error: "GOOGLE_PLACES_API_KEY not configured" });
    return;
  }
  try {
    const placeId = await resolvePlaceId(apiKey);
    const url = new URL(
      "https://maps.googleapis.com/maps/api/place/details/json",
    );
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", "rating,user_ratings_total,reviews");
    url.searchParams.set("key", apiKey);
    const detailsRes = await fetch(url.toString());
    const details = (await detailsRes.json()) as {
      result?: {
        rating?: number;
        user_ratings_total?: number;
        reviews?: Array<{
          author_name: string;
          relative_time_description: string;
          rating: number;
          text: string;
          profile_photo_url?: string;
          time: number;
        }>;
      };
    };
    const r = details.result ?? {};
    res.json({
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
    });
  } catch (err) {
    req.log.error({ err }, "Failed to fetch Google reviews");
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

export default router;
