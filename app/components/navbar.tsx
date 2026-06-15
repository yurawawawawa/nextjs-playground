export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      {/* gradient blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-40"></div>

      {/* navbar container */}
      <div className="relative mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">
        {/* logo */}
        <h1 className="text-2xl font-black text-white">
          Aero<span className="text-cyan-400">Cast</span>
        </h1>

        {/* links */}
        <div className="hidden gap-8 md:flex">
          <a href="#" className="text-gray-300 transition hover:text-white">
            Features
          </a>

          <a href="#" className="text-gray-300 transition hover:text-white">
            Pricing
          </a>

          <a href="#" className="text-gray-300 transition hover:text-white">
            Docs
          </a>

          <a href="#" className="text-gray-300 transition hover:text-white">
            Contact
          </a>
        </div>

        {/* button */}
        <button className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:scale-105">
          Get Started
        </button>
      </div>
    </nav>
  );
}
