import { BalldontlieAPI } from "@balldontlie/sdk";



const apiKey = process.env.NEXT_PUBLIC_BALLEDONTLIE_API_KEY;

if (!apiKey) {
  throw new Error('Missing NEXT_PUBLIC_BALLDONTLIE_API_KEY environment variable');
}

const api = new BalldontlieAPI({ apiKey });

function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10); // YYYY-MM-DD
}

export async function getTeams() {
  try {
    const teams = await api.nba.getTeams();
    console.log(teams.data);
    return teams.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getPlayersByName(name: string) {
  try {
    const players = await api.nba.getPlayers({ search: name });
    console.log(players.data);
    return players.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getMostRecentGames() {
  let date = new Date(); // start today
  let attempts = 0;
  const maxAttempts = 1; // look back max 7 days

  while (attempts < maxAttempts) {
    const dateStr = formatDate(date);
    console.log(`Checking games for date: ${dateStr}`);

    const response = await api.nba.getGames({ dates: [dateStr], per_page: 100 });

    if (response.data.length > 0) {
      console.log(`Found ${response.data.length} games on ${dateStr}`);
      return response.data;
    }

    // no games found, go back 1 day
    date.setDate(date.getDate() - 1);
    attempts++;
  }

  console.log("No recent games found in the last 7 days");
  return [];
}