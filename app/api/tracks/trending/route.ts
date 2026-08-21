import { getTrendingTracks } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const limitValue = Number(new URL(request.url).searchParams.get("limit") ?? "10");
  const limit = Number.isInteger(limitValue) && limitValue > 0 ? Math.min(limitValue, 50) : 10;
  return Response.json({ data: getTrendingTracks(limit), meta: { limit } });
}
