import Navbar from "@/app/components/navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <section className="flex h-screen flex-col items-center justify-center">
        <h1 className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-7xl font-black text-transparent">
          Modern SaaS UI
        </h1>

        <p className="mt-6 max-w-xl text-center text-lg text-gray-400">
          Beautiful futuristic landing page built with Next.js playground.
        </p>
      </section>
    </main>
  );
}
