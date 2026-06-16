import Image from "next/image";

const albums = [
  {
    title: "Sore",
    image: "/sore.jpg",
    rotate: "-rotate-12",
    translate: "translate-y-10",
  },

  {
    title: "The Adams",
    image: "/adams.jpg",
    rotate: "-rotate-6",
    translate: "-translate-y-4",
  },

  {
    title: "The Panturas",
    image: "/panturas.jpg",
    rotate: "rotate-3",
    translate: "translate-y-6",
  },

  {
    title: "Reality Club",
    image: "/realityclub.jpg",
    rotate: "rotate-6",
    translate: "-translate-y-2",
  },

  {
    title: "Jason Ranti",
    image: "/jasonranti.jpg",
    rotate: "rotate-12",
    translate: "translate-y-8",
  },
];

export default function AlbumStack({ search }: { search: string }) {
  const filteredAlbums = albums.filter((album) =>
    album.title.toLowerCase().includes(search.toLowerCase()),
  );
  if (filteredAlbums.length === 0) {
    return (
      <section className="w-full flex justify-center py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-zinc-700">
            Sorry, there's no such band or album in our archive.
          </h2>

          <p className="mt-3 text-zinc-500">
            Try searching for The Adams, Sore, The Panturas, Reality Club, or
            Jason Ranti.
          </p>
        </div>
      </section>
    );
  }
  return (
    <section className="w-full flex justify-center py-20 overflow-hidden">
      <div className="flex items-center justify-center px-10">
        {filteredAlbums.map((album, index) => (
          <div
            key={index}
            className={`
              relative
              w-64
              h-64
              rounded-3xl
              overflow-hidden
              shadow-[0_20px_60px_rgba(0,0,0,0.15)]
              border border-black/10
              bg-white
              ${album.rotate}
              ${album.translate}
              transition
              duration-300
              hover:scale-105
              hover:z-50
              -mx-4
              float-card
            `}
            style={{
              animationDelay: `${index * 0.8}s`,
            }}
          >
            <Image
              src={album.image}
              alt={album.title}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
