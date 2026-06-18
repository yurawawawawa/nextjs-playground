import Navbar from "../components/navbar";

const artists = [
  {
    name: "The Adams",
    genre: "Indie Pop",
    image: "/adams.jpg",
  },
  {
    name: "Sore",
    genre: "Indie Rock",
    image: "/sore.jpg",
  },
  {
    name: "The Panturas",
    genre: "Surf Rock",
    image: "/panturas.jpg",
  },
  {
    name: "Reality Club",
    genre: "Alternative",
    image: "/realityclub.jpg",
  },
  {
    name: "Jason Ranti",
    genre: "Folk",
    image: "/jasonranti.jpg",
  },
];

export default function ArtistsPage() {
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

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {artists.map((artist) => (
            <ArtistCard
              key={artist.name}
              name={artist.name}
              genre={artist.genre}
              image={artist.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
