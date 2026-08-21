import { artists as seedArtists } from "@/data/artists";

export type Track = {
  id: string;
  title: string;
  audioUrl: string | null;
  durationSeconds: number;
  playCount: number;
  hypeCount: number;
};

export type Album = {
  id: string;
  title: string;
  coverUrl: string;
  releaseDate: string | null;
  type: "LP" | "EP" | "Single";
  tracks: Track[];
};

export type Artist = {
  id: string;
  slug: string;
  name: string;
  genre: string;
  description: string;
  imageUrl: string;
  city: string;
  activeYears: string;
  hypeCount: number;
  isVerified: boolean;
  albums: Album[];
};

const artistMetadata: Record<string, Pick<Artist, "city" | "activeYears">> = {
  "the-adams": { city: "Jakarta", activeYears: "2001-present" },
  sore: { city: "Jakarta", activeYears: "2002-present" },
  "the-panturas": { city: "Jatinangor", activeYears: "2015-present" },
  "reality-club": { city: "Jakarta", activeYears: "2016-present" },
  "jason-ranti": { city: "Jakarta", activeYears: "2010-present" },
};

function toId(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function makeCatalog(): Artist[] {
  return Object.entries(seedArtists).map(([slug, artist], artistIndex) => ({
    id: `artist-${artistIndex + 1}`,
    slug,
    name: artist.name,
    genre: artist.genre,
    description: artist.description,
    imageUrl: artist.image,
    city: artistMetadata[slug]?.city ?? "Indonesia",
    activeYears: artistMetadata[slug]?.activeYears ?? "2000-present",
    hypeCount: 100 - artistIndex * 13,
    isVerified: true,
    albums: artist.albums.map((title, albumIndex) => ({
      id: `${slug}-album-${albumIndex + 1}`,
      title,
      coverUrl: artist.image,
      releaseDate: null,
      type: title.includes("(") ? "LP" : "Single",
      tracks: artist.tracks
        .filter((_, trackIndex) => trackIndex % artist.albums.length === albumIndex % artist.albums.length)
        .slice(0, 3)
        .map((trackTitle, trackIndex) => ({
          id: `${slug}-track-${albumIndex + 1}-${trackIndex + 1}`,
          title: trackTitle,
          audioUrl: null,
          durationSeconds: 0,
          playCount: 1000 - artistIndex * 100 - trackIndex * 37,
          hypeCount: 50 - artistIndex * 5 - trackIndex,
        })),
    })),
  }));
}

const catalog = makeCatalog();

export function listArtists(filters: { search?: string; genre?: string; city?: string; era?: string }) {
  const query = filters.search?.trim().toLowerCase();
  return catalog.filter((artist) => {
    const matchesSearch = !query || [artist.name, artist.genre, artist.city].some((value) => value.toLowerCase().includes(query));
    const matchesGenre = !filters.genre || artist.genre.toLowerCase() === filters.genre.toLowerCase();
    const matchesCity = !filters.city || artist.city.toLowerCase() === filters.city.toLowerCase();
    const matchesEra = !filters.era || artist.activeYears.toLowerCase().includes(filters.era.toLowerCase());
    return matchesSearch && matchesGenre && matchesCity && matchesEra;
  });
}

export function getArtistBySlug(slug: string) {
  return catalog.find((artist) => artist.slug === slug);
}

export function getAlbumById(id: string) {
  for (const artist of catalog) {
    const album = artist.albums.find((candidate) => candidate.id === id);
    if (album) return { ...album, artist: { id: artist.id, name: artist.name, slug: artist.slug } };
  }
}

export function getTrendingTracks(limit = 10) {
  return catalog
    .flatMap((artist) => artist.albums.flatMap((album) => album.tracks.map((track) => ({ ...track, artist: artist.name, album: album.title }))))
    .sort((a, b) => b.hypeCount + b.playCount / 100 - (a.hypeCount + a.playCount / 100))
    .slice(0, limit);
}

export function serializeArtist(artist: Artist) {
  return { ...artist, albums: artist.albums.map(({ tracks, ...album }) => ({ ...album, trackCount: tracks.length })) };
}

export function getCatalog() {
  return catalog;
}

export { toId };
