type SearchBarProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <div
      className="
        mb-12
        flex
        items-center
        gap-3
        w-[500px]
        max-w-full
        px-6
        py-4
        rounded-full
        bg-white/20
        backdrop-blur-xl
        border
        border-white/30
        shadow-[0_8px_32px_rgba(0,0,0,0.08)]
      "
    >
      <span className="text-zinc-500">🔍</span>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search artists..."
        className="
          flex-1
          bg-transparent
          outline-none
          text-black
          placeholder:text-zinc-500
        "
      />
    </div>
  );
}
