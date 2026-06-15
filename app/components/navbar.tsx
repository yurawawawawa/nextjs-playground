export default function Navbar() {
  return (
    <div className="flex justify-center pt-6 sticky top-0 z-50">
      <nav
        className="
          w-[90%]
          max-w-6xl
          flex
          items-center
          justify-between
          px-8
          py-4
          rounded-full
          border
          border-white/30
          bg-white/20
          backdrop-blur-xl
          shadow-[0_8px_32px_rgba(0,0,0,0.08)]
        "
      >
        <h1
          className="
            text-3xl
            font-black
            text-black
            font-sugo
            tracking-[-0.02em]
          "
        >
          Skenduy
          <span className="text-orange-500">List</span>
        </h1>

        <ul
          className="
            hidden
            md:flex
            gap-10
            text-zinc-700
            font-medium
          "
        >
          <li className="hover:text-orange-500 transition cursor-pointer">
            Home
          </li>

          <li className="hover:text-orange-500 transition cursor-pointer">
            Discover
          </li>

          <li className="hover:text-orange-500 transition cursor-pointer">
            Genres
          </li>

          <li className="hover:text-orange-500 transition cursor-pointer">
            About
          </li>
        </ul>

        <button
          className="
            bg-black/90
            hover:bg-black
            transition
            px-6
            py-3
            rounded-full
            font-semibold
            text-white
            shadow-lg
          "
        >
          Explore
        </button>
      </nav>
    </div>
  );
}
