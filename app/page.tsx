import Navbar from "./components/navbar";
import AlbumStack from "./components/AlbumStack";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] text-black">
      <Navbar />

      <section
        className="
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-6
          pt-16
          overflow-hidden
        "
      >
        <div className="mb-12">
          <input
            type="text"
            placeholder="Search artists..."
            className="
                w-[500px]
                max-w-full
                px-6
                py-4
                rounded-full
                border
                border-black/10
                bg-white/70
                backdrop-blur-md
                outline-none
                text-lg
                shadow-md
                focus:border-orange-500
              "
          />
        </div>

        <AlbumStack />

        <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mt-8 mb-6">
          Indonesian Indie Music Archive
        </p>

        <h1
          className="
              mt-48
              text-6xl
              md:text-7xl
              font-black
              tracking-[-0.03em]
              leading-[1]
              leading-[0.9]
              font-sugo
            "
        >
          Discover The
          <span className="text-orange-500"> Skena </span>
          Sound of Indonesia
        </h1>

        <p className="mt-8 text-zinc-600 text-lg max-w-2xl leading-relaxed">
          Explore legendary Indonesian indie artists from The Adams, Sore, The
          Panturas, White Shoes & The Couples Company, and many more.
        </p>

        <div className="flex gap-4 mt-10 mb-20">
          <button
            className="
              bg-black
              text-white
              hover:bg-zinc-800
              transition
              px-6
              py-3
              rounded-full
              font-semibold
            "
          >
            Explore Artists
          </button>

          <button
            className="
              border
              border-black/20
              hover:border-orange-500
              hover:text-orange-500
              transition
              px-6
              py-3
              rounded-full
              font-semibold
            "
          >
            Trending Now
          </button>
        </div>
      </section>
    </main>
  );
}
