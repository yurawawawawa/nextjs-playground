import Navbar from "../components/navbar";

export default function ArtistsPage() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] text-black">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 pt-20">
        <h1
          className="
            text-6xl
            font-sugo
            font-black
          "
        >
          Artists Archive
        </h1>

        <p className="mt-4 text-zinc-600">Discover Indonesian indie artists.</p>
      </section>
    </main>
  );
}
