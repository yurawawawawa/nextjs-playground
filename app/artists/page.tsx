"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import ArtistCard from "../components/ArtistCard";
import SearchBar from "../components/SearchBar";

type ArtistSummary = {
  id: string;
  name: string;
  genre: string;
  image: string;
  slug: string;
};

export default function ArtistsPage() {
  const [search, setSearch] = useState("");
  const [artists, setArtists] = useState<ArtistSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`/api/artists?search=${encodeURIComponent(search)}`, { signal: controller.signal })
      .then((response) => response.json())
      .then((payload: ArtistSummary[]) => setArtists(payload))
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setArtists([]);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [search]);

  return (
    <main className="min-h-screen bg-[#F5F1E8] text-black">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1
          className="
            text-6xl
            font-sugo
            font-black
          "
        >
          Artists Archive
        </h1>

        <p className="mt-4 text-zinc-600 text-lg">
          Discover Indonesian indie artists.
        </p>

        <div className="mt-10">
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        {loading ? <p className="mt-16 text-zinc-500">Loading archive...</p> : null}
        {!loading && artists.length === 0 ? <p className="mt-16 text-zinc-500">No artists found.</p> : null}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {artists.map((artist) => (
            <ArtistCard
              key={artist.id}
              name={artist.name}
              genre={artist.genre}
              image={artist.image}
              slug={artist.slug}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
