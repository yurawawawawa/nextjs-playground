export default function Navbar() {
  return (
    <div className="flex justify-center pt-6">
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
          border-black/10
          bg-white/40
          backdrop-blur-md
          shadow-md
        "
      >
        <h1
          className="
              text-3xl
              font-black
              text-black
              font-sugo
              tracking-[-0.06em]
          "
        >
          Skenduy
          <span className="text-orange-500">List</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-zinc-700 font-medium">
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
            bg-black
            hover:bg-zinc-800
            transition
            px-5
            py-2
            rounded-full
            font-semibold
            text-white
          "
        >
          Explore
        </button>
      </nav>
    </div>
  );
}
