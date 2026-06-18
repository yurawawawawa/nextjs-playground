import Navbar from "../../components/navbar";

export default function TheAdamsPage() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] text-black">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-6xl font-bold">The Adams</h1>

        <p className="mt-4 text-zinc-600">Indonesian Indie Pop Band</p>
      </section>
    </main>
  );
}
