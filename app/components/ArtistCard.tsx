import Image from "next/image";
import Link from "next/link";

type ArtistCardProps = {
  name: string;
  genre: string;
  image: string;
  slug: string;
};

export default function ArtistCard({
  name,
  genre,
  image,
  slug,
}: ArtistCardProps) {
  return (
    <Link href={`/artists/${slug}`}>
      <div
        className="
          group
          cursor-pointer
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
            overflow-hidden
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
              sizes="(max-width: 768px) 100vw, 33vw"
              className="
                object-cover
                transition
                duration-300
                group-hover:scale-105
              "
            />
          </div>
        </div>

        <h2
          className="
            mt-5
            text-2xl
            font-bold
            transition
            group-hover:text-orange-500
          "
        >
          {name}
        </h2>

        <p className="text-zinc-500">{genre}</p>
      </div>
    </Link>
  );
}
