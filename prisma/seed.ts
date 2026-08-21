import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const artistsData = {
  "the-adams": {
    name: "The Adams",
    genre: "Indonesian Indie Rock",
    image: "/adams.jpg",
    description: "One of Indonesia's most influential indie rock bands, known for their signature vocal harmonies, crunchy guitars, and energetic power-pop hooks that have defined the local indie landscape since the early 2000s.",
    albums: ["The Adams (2005)", "v2.0.5 (2006)", "Agterplaas (2019)"],
    tracks: ["Konservatif", "Timur", "Halo Beni", "Waiting", "Hanya Kau"],
  },
  sore: {
    name: "Sore",
    genre: "Indonesian Indie Pop",
    image: "/sore.jpg",
    description: "A critically acclaimed chamber pop group from Jakarta. Known for their lush arrangements, brass sections, retro-inspired melodies, and poetic Indonesian lyrics that capture a nostalgic atmosphere.",
    albums: ["Centralismo (2005)", "Ports of Lima (2008)", "Matinya Aliran Rasa (2015)", "Quondam Oportet (2023)"],
    tracks: [
      "Karolina",
      "Setengah Lima",
      "Mata Berdebu",
      "No Fruits For Today",
    ],
  },
  "the-panturas": {
    name: "The Panturas",
    genre: "Surf Rock",
    image: "/panturas.jpg",
    description: "A surf rock band hailing from Jatinangor. They bring an energetic punk-infused surf guitar sound combined with cinematic stories of sea voyages, local folklore, and maritime adventures.",
    albums: ["Mabuk Laut (2018)", "Ombak Banyu Asmara (2021)"],
    tracks: ["Sunshine", "Arabian Playboy", "Queen of The South", "Tafsir Mistik"],
  },
  "reality-club": {
    name: "Reality Club",
    genre: "Alternative Rock",
    image: "/realityclub.jpg",
    description: "An English-language indie rock band from Jakarta. Combining catchy guitar riffs with rich cinematic storytelling, they have earned international acclaim and established themselves as a leading modern Indonesian export.",
    albums: ["Never Get Better (2017)", "What Do You Really Know? (2019)", "Reality Club Presents... (2023)"],
    tracks: ["Anything You Want", "Alexandra", "Telenovia", "Love Equation"],
  },
  "jason-ranti": {
    name: "Jason Ranti",
    genre: "Folk",
    image: "/jasonranti.jpg",
    description: "A satirical folk singer-songwriter known for his acoustic guitar, harmonica, and witty lyrical storytelling. His songs comment on society, daily life, and the eccentricities of modern Indonesian culture with humor and raw honesty.",
    albums: ["Akibat Pergaulan Blues (2017)", "Sekilas Info (2019)", "Jalan Ninja (2022)"],
    tracks: ["Variasi Pink", "Anggurman", "Stephanie Anak Senie", "Lagunya Lagu Lagu"],
  },
};

async function main() {
  console.log("Start seeding...");

  // Clear existing data
  await prisma.track.deleteMany({});
  await prisma.album.deleteMany({});
  await prisma.artist.deleteMany({});

  for (const [slug, data] of Object.entries(artistsData)) {
    const artist = await prisma.artist.create({
      data: {
        slug,
        name: data.name,
        genre: data.genre,
        image: data.image,
        description: data.description,
        city:
          slug === "the-adams"
            ? "Jakarta"
            : slug === "sore"
              ? "Jakarta"
              : slug === "the-panturas"
                ? "Jatinangor"
                : slug === "reality-club"
                  ? "Jakarta"
                  : "Jakarta",
        activeYears:
          slug === "the-adams"
            ? "2001-present"
            : slug === "sore"
              ? "2002-2024"
              : slug === "the-panturas"
                ? "2015-present"
                : slug === "reality-club"
                  ? "2016-present"
                  : "2016-present",
        isVerified: true,
      },
    });

    console.log(`Created artist: ${artist.name}`);

    // Create Albums
    const createdAlbums = [];
    for (const albumTitle of data.albums) {
      const yearMatch = albumTitle.match(/\((\d{4})\)/);
      const releaseDate = yearMatch ? yearMatch[1] : "Unknown";
      const cleanTitle = albumTitle.replace(/\s*\(\d{4}\)/, "");

      const album = await prisma.album.create({
        data: {
          title: cleanTitle,
          coverUrl: data.image,
          releaseDate,
          artistId: artist.id,
        },
      });
      createdAlbums.push(album);
    }

    // Create Tracks
    for (const trackTitle of data.tracks) {
      // Find matching album if possible, otherwise leave null
      const matchedAlbum = createdAlbums.find((album) => {
        // Simple heuristic: if track title is part of some album title concept
        return false;
      });

      await prisma.track.create({
        data: {
          title: trackTitle,
          artistId: artist.id,
          albumId: matchedAlbum ? matchedAlbum.id : null,
        },
      });
    }
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
