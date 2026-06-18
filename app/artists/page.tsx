"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import ArtistCard from "../components/ArtistCard";
import SearchBar from "../components/SearchBar";

const artists = [
  {
    name: "The Adams",
    genre: "Indie Pop",
    image: "/adams.jpg",
    slug: "the-adams",
  },
  {
    name: "Sore",
    genre: "Indie Rock",
    image: "/sore.jpg",
    slug: "sore",
  },
  {
    name: "The Panturas",
    genre: "Surf Rock",
    image: "/panturas.jpg",
    slug: "the-panturas",
  },
  {
    name: "Reality Club",
    genre: "Alternative",
    image: "/realityclub.jpg",
    slug: "reality-club",
  },
  {
    name: "Jason Ranti",
    genre: "Folk",
    image: "/jasonranti.jpg",
    slug: "jason-ranti",
  },
];

export default function ArtistsPage() {
  const [search, setSearch] = useState("");
  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(search.toLowerCase()),
  );

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

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {filteredArtists.map((artist) => (
            <ArtistCard
              key={artist.name}
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
