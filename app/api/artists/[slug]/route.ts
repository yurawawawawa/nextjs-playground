import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const artist = await prisma.artist.findUnique({
      where: { slug },
      include: {
        albums: {
          orderBy: {
            releaseDate: "asc",
          },
        },
        tracks: {
          orderBy: {
            title: "asc",
          },
        },
      },
    });

    if (!artist) {
      return NextResponse.json(
        { error: "Artist not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(artist);
  } catch (error) {
    console.error("Failed to fetch artist details:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
