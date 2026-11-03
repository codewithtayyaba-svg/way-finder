import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { city } = await request.json();

        // Check if user entered a location
        if (!city || !city.trim()) {
            return NextResponse.json(
                { error: "Please enter a city or place name." },
                { status: 400 }
            );
        }

        // Send request to Google Places API
        const response = await fetch(
            "https://places.googleapis.com/v1/places:searchText",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "X-Goog-Api-Key": process.env.GOOGLE_PLACES_API_KEY,
                    "X-Goog-FieldMask":
                        "places.id,places.displayName,places.formattedAddress,places.location,places.googleMapsUri,places.types,places.rating,places.photos"
                },

                body: JSON.stringify({
                    textQuery: `Famous tourist attractions in ${city}`,
                    maxResultCount: 5,
                    languageCode: "en"
                })
            }
        );

        const data = await response.json();

        // Check Google API response
        if (!response.ok) {
            console.error("Google API Error:", data);

            return NextResponse.json(
                { error: "Unable to find tourist attractions." },
                { status: response.status }
            );
        }

        // Return places to frontend
    return NextResponse.json({
    success: true,
    searchedLocation: city,
    places: (data.places)
});
    } catch (error) {
        console.error("Error:", error);

        return NextResponse.json(
            { error: "Something went wrong." },
            { status: 500 }
        );
    }
}
