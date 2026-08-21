import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";

    const artists = await prisma.artist.findMany({
      where: search
        ? {
            OR: [
              { name: { contains: search } },
              { genre: { contains: search } },
              { description: { contains: search } },
            ],
          }
        : undefined,
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json(artists);
  } catch (error) {
    console.error("Failed to fetch artists:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
