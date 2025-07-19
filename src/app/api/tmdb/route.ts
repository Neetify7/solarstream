import { NextResponse } from "next/server";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || "movie";
  const query = searchParams.get("query") || "";
  const page = searchParams.get("page") || "1";

  if (!["movie", "tv", "16"].includes(category)) {
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });
  }

  try {
    let url = "";

    if (category === "movie" || category === "tv") {
      if (query) {
        url = `${TMDB_BASE_URL}/search/${category}?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=${page}&query=${encodeURIComponent(
          query
        )}&include_adult=false`;
      } else {
        url = `${TMDB_BASE_URL}/${category}/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=${page}`;
      }
    } else if (category === "16") {
      if (query) {
        url = `${TMDB_BASE_URL}/search/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=${page}&query=${encodeURIComponent(
          query
        )}&with_genres=16&include_adult=false`;
      } else {
        url = `${TMDB_BASE_URL}/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&with_genres=16&page=${page}`;
      }
    }

    const tmdbRes = await fetch(url);

    if (!tmdbRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch from TMDB" },
        { status: tmdbRes.status }
      );
    }

    const data = await tmdbRes.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}