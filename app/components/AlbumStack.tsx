"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Artist {
  id: string;
  name: string;
  slug: string;
  genre: string;
  image: string;
}

const stackStyles = [
  { rotate: "-rotate-12", translate: "translate-y-10" },
  { rotate: "-rotate-6", translate: "-translate-y-4" },
  { rotate: "rotate-3", translate: "translate-y-6" },
  { rotate: "rotate-6", translate: "-translate-y-2" },
  { rotate: "rotate-12", translate: "translate-y-8" },
];

export default function AlbumStack({ search }: { search: string }) {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArtists() {
      setLoading(true);
      try {
        const response = await fetch(`/api/artists?search=${encodeURIComponent(search)}`);
        if (response.ok) {
          const data = await response.json();
          setArtists(data);
        }
      } catch (error) {
        console.error("Failed to fetch artists:", error);
      } finally {
        setLoading(false);
      }
    }

    const timer = setTimeout(() => {
      fetchArtists();
    }, 300); // debounce API calls

    return () => clearTimeout(timer);
  }, [search]);

  if (loading) {
    return (
      <section className="w-full flex justify-center py-20">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-zinc-500 font-medium">Searching archive...</p>
        </div>
      </section>
    );
  }

  if (artists.length === 0) {
    return (
      <section className="w-full flex justify-center py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-zinc-700">
            Sorry, there's no such band or album in our archive.
          </h2>
          <p className="mt-3 text-zinc-500">
            Try searching for The Adams, Sore, The Panturas, Reality Club, or
            Jason Ranti.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full flex justify-center py-20 overflow-hidden">
      <div className="flex items-center justify-center px-10">
        {artists.map((artist, index) => {
          const style = stackStyles[index % stackStyles.length];
          return (
            <Link
              href={`/artists/${artist.slug}`}
              key={artist.id}
              className={`
                relative
                w-64
                h-64
                rounded-3xl
                overflow-hidden
                shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                border border-black/10
                bg-white
                ${style.rotate}
                ${style.translate}
                transition
                duration-300
                hover:scale-105
                hover:z-50
                -mx-4
                float-card
                cursor-pointer
                block
              `}
              style={{
                animationDelay: `${index * 0.8}s`,
              }}
            >
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover"
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
