import Image from "next/image";
import Navbar from "../../components/navbar";

export default function TheAdamsPage() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] text-black">
      <Navbar />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="
              relative
              h-[500px]
              rounded-3xl
              overflow-hidden
              shadow-2xl
            "
          >
            <Image
              src="/adams.jpg"
              alt="The Adams"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-orange-500 text-sm">
              Indonesian Indie Rock
            </p>

            <h1
              className="
                mt-4
                text-7xl
                font-sugo
                font-black
                leading-none
              "
            >
              The Adams
            </h1>

            <p className="mt-6 text-zinc-600 text-lg leading-relaxed">
              One of Indonesia's most influential indie rock bands, known for
              their melodic sound, witty lyrics, and cult-classic albums.
            </p>

            <div className="flex gap-4 mt-8">
              <button
                className="
                  bg-black
                  text-white
                  px-6
                  py-3
                  rounded-full
                "
              >
                Listen Now
              </button>

              <button
                className="
                  border
                  border-black/20
                  px-6
                  py-3
                  rounded-full
                "
              >
                Explore Albums
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className="max-w-6xl mx-auto px-6 mt-32">
        <h2 className="text-4xl font-bold mb-6">About</h2>

        <p className="text-zinc-600 text-lg leading-relaxed max-w-4xl">
          The Adams is an Indonesian indie rock band from Jakarta. Their music
          combines catchy melodies, intelligent songwriting, and a distinctive
          alternative rock sound that has influenced generations of Indonesian
          indie musicians.
        </p>
      </section>

      {/* ALBUMS */}
      <section className="max-w-6xl mx-auto px-6 mt-32">
        <h2 className="text-4xl font-bold mb-10">Essential Albums</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-orange-500 rounded-3xl p-4">
            <div className="aspect-square bg-white rounded-2xl" />
            <h3 className="mt-4 text-xl font-bold">The Adams</h3>
          </div>

          <div className="bg-orange-500 rounded-3xl p-4">
            <div className="aspect-square bg-white rounded-2xl" />
            <h3 className="mt-4 text-xl font-bold">V2.05</h3>
          </div>

          <div className="bg-orange-500 rounded-3xl p-4">
            <div className="aspect-square bg-white rounded-2xl" />
            <h3 className="mt-4 text-xl font-bold">Agterplaas</h3>
          </div>
        </div>
      </section>

      {/* TOP TRACKS */}
      <section className="max-w-6xl mx-auto px-6 mt-32 pb-32">
        <h2 className="text-4xl font-bold mb-10">Top Tracks</h2>

        <div className="space-y-4">
          {["Konservatif", "Timur", "Halo Beni", "Waiting", "Hanya Kau"].map(
            (track, index) => (
              <div
                key={track}
                className="
                flex
                justify-between
                items-center
                bg-white/50
                backdrop-blur-md
                rounded-2xl
                px-6
                py-5
              "
              >
                <div className="flex gap-4">
                  <span className="font-bold text-orange-500">{index + 1}</span>

                  <span>{track}</span>
                </div>
              </div>
            ),
          )}
        </div>
      </section>
    </main>
  );
}
