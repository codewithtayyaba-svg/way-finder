
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const placeId = new URL(request.url).searchParams.get("placeId");

    if (!placeId) {
      return NextResponse.json(
        { error: "A place ID is required." },
        { status: 400 }
      );
    }

    if (!process.env.GOOGLE_PLACES_API_KEY) {
      console.error("GOOGLE_PLACES_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Place details are temporarily unavailable." },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": process.env.GOOGLE_PLACES_API_KEY,
          "X-Goog-FieldMask": "*",
        },
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Google Place Details API error:", data);
      return NextResponse.json(data, {
        status: response.status,
      });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch place details" },
      { status: 500 }
    );
  }
}
