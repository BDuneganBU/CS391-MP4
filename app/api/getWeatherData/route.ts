import {NextResponse} from "next/server";
export const dynamic = "force-dynamic";

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export async function GET(request:Request): Promise<NextResponse> {

    //Using String-Deconstruction, extract search params from the URL
    const { searchParams } = new URL(request.url);

    //Get the value of the 'city' parameter from the querey striing
    const city = searchParams.get("city");

    //If no 'city' parameter is provided, return 400 Bad Request
    if (!city) {
        return NextResponse.json({error: "No [city] provided"}, {status:400});
    }

    //Make an API request to Visual Corssing to fetch weather data for a specific city
    const res = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=us&include=days%2Ccurrent%2Cevents&key=${WEATHER_API_KEY}&contentType=json`
    );

    // If API request fails (200) return 500 error code
    if(res.status !== 200) {
        return NextResponse.json({error: "Failed to fetch data"}, {status:500});
    }

    //Parse the JSON
    const data = await res.json();

    //Return the parsed JSON
    return NextResponse.json(data);
}