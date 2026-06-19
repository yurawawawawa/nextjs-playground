import { artists } from "@/data/artists";
import Image from "next/image";

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const artist = artists[slug as keyof typeof artists];

  if (!artist) {
    return <h1>Artist not found</h1>;
  }

  return (
    <main className="min-h-screen bg-[#F5F1E8] text-black">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-6xl font-bold">{artist.name}</h1>

        <p className="mt-4 text-zinc-600">{artist.genre}</p>
      </section>
    </main>
  );
}
