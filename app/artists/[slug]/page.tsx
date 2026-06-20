import { artists } from "@/data/artists";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/navbar";
import ArtistCard from "@/app/components/ArtistCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artist = artists[slug as keyof typeof artists];
  if (!artist) {
    return {
      title: "Artist Not Found - SkenduyList",
    };
  }
  return {
    title: `${artist.name} | SkenduyList`,
    description: `${artist.description} Read the biography, explore albums, and view top tracks of ${artist.name}.`,
  };
}

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const artist = artists[slug as keyof typeof artists];

  // Get other artists for "You Might Also Like"
  const allArtists = Object.entries(artists).map(([key, value]) => ({
    slug: key,
    ...value,
  }));
  const relatedArtists = allArtists.filter((a) => a.slug !== slug).slice(0, 3);

  if (!artist) {
    return (
      <main className="min-h-screen bg-[#F5F1E8] text-black">
        <Navbar />
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-zinc-800">Artist Not Found</h1>
          <p className="mt-4 text-zinc-600">The artist you are looking for does not exist in our archive.</p>
          <Link href="/artists" className="mt-8 inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-zinc-800 transition">
            Back to Archive
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F1E8] text-black">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link
          href="/artists"
          className="
            inline-flex
            items-center
            gap-2
            text-zinc-600
            hover:text-orange-500
            transition
            mb-10
            font-semibold
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Artists Archive
        </Link>

        {/* Hero Banner Grid */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center pb-16 border-b border-black/5">
          <div className="md:col-span-7 space-y-6">
            <span className="inline-block bg-orange-100 text-orange-600 text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
              {artist.genre}
            </span>
            
            <h1
              className="
                text-6xl
                md:text-8xl
                font-black
                font-sugo
                tracking-[-0.03em]
                leading-[0.9]
                text-black
              "
            >
              {artist.name}
            </h1>

            <p className="text-zinc-600 text-lg md:text-xl leading-relaxed font-medium">
              {artist.description}
            </p>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div
              className="
                relative
                w-full
                max-w-sm
                aspect-square
                bg-orange-500
                rounded-3xl
                p-5
                shadow-2xl
                rotate-2
                hover:rotate-0
                transition
                duration-500
              "
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-12 gap-12 pt-16">
          {/* Biography & Albums */}
          <div className="md:col-span-7 space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-black font-sugo tracking-tight text-black">
                Biography
              </h2>
              <p className="text-zinc-600 leading-relaxed text-lg">
                {artist.description} As a prominent force in the {artist.genre} scene, {artist.name} has continued to captivate listeners across Indonesia. Their unique approach to music production and stage presence has cemented their place as local legends.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-black font-sugo tracking-tight text-black">
                Discography
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {artist.albums.map((album) => (
                  <div
                    key={album}
                    className="
                      flex
                      items-center
                      gap-4
                      bg-white/40
                      hover:bg-white/80
                      border
                      border-black/5
                      p-4
                      rounded-2xl
                      shadow-sm
                      transition
                      duration-300
                    "
                  >
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center font-bold text-xl">
                      💿
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-800 text-base leading-tight">
                        {album}
                      </h3>
                      <p className="text-xs text-zinc-500 mt-0.5">Studio Album</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Songs */}
          <div className="md:col-span-5 space-y-6">
            <h2 className="text-3xl font-black font-sugo tracking-tight text-black">
              Popular Tracks
            </h2>

            <div className="space-y-3">
              {artist.tracks.map((track, i) => (
                <div
                  key={track}
                  className="
                    flex
                    items-center
                    justify-between
                    p-4
                    bg-white/40
                    hover:bg-white/80
                    border
                    border-black/5
                    rounded-2xl
                    transition
                    duration-300
                    group
                  "
                >
                  <div className="flex items-center gap-4">
                    <span className="text-zinc-400 font-mono text-sm w-5">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="font-bold text-zinc-800 group-hover:text-orange-500 transition duration-300">
                      {track}
                    </span>
                  </div>
                  <span
                    className="
                      text-[10px]
                      font-bold
                      px-3
                      py-1
                      bg-zinc-200/55
                      rounded-full
                      text-zinc-500
                      uppercase
                      tracking-wider
                      group-hover:bg-orange-100
                      group-hover:text-orange-600
                      transition
                      duration-300
                    "
                  >
                    Top Track
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Artists Section */}
        <div className="mt-20 pt-16 border-t border-black/5">
          <h2 className="text-4xl font-black font-sugo tracking-tight text-zinc-900 mb-10">
            You Might Also Like
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedArtists.map((related) => (
              <ArtistCard
                key={related.slug}
                slug={related.slug}
                name={related.name}
                genre={related.genre}
                image={related.image}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

