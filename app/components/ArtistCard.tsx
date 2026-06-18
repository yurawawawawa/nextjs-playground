import Image from "next/image";

type ArtistCardProps = {
  name: string;
  genre: string;
  image: string;
};

export default function ArtistCard({ name, genre, image }: ArtistCardProps) {
  return (
    <div
      className="
        group
        transition
        duration-300
        hover:-translate-y-2
      "
    >
      <div
        className="
          bg-orange-500
          rounded-3xl
          p-5
          shadow-xl
        "
      >
        <div
          className="
            relative
            h-72
            rounded-2xl
            overflow-hidden
          "
        >
          <Image
            src={image}
            alt={name}
            fill
            className="
              object-cover
              group-hover:-translate-y-2
              transition
              duration-300
            "
          />
        </div>
      </div>

      <h2 className="mt-5 text-2xl font-bold">{name}</h2>

      <p className="text-zinc-500">{genre}</p>
    </div>
  );
}
