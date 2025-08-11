const API_HOST ="api-nba-v1.p.rapidapi.com"
const API_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY

/**
 * Returns NBA games from a certain date
 * @param dateString YYYY-MM-DD format
 */
export async function getGamesPerDate(dateString: string) {
    const url = `https://${API_HOST}/games?date=${dateString}`
    const options = {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST
        } as Record<string, string>
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(error);
    }
}