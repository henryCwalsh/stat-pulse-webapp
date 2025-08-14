"use client"
import { getGamesPerDate, getPlayersForDate } from "@/lib/nbaApi";
import { useEffect, useState } from "react";

export default function NbaTest(){
    const [games, setGames] = useState<any[]>([]);
      const [players, setPlayers] = useState<any[]>([]);


    useEffect(() => {
      async function fetchData() {
        const date = "2024-12-25";
        console.log("Fetching games and players for:", date);

        try {
          // 1. Fetch games
          const gamesData = await getGamesPerDate(date);
          console.log("Games:", gamesData);
          setGames(gamesData?.response || []);

          // 2. Fetch players
          const playersData = await getPlayersForDate(date);
          console.log("Players:", playersData);
          setPlayers(playersData?.response || []);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
    }, []);

      return (
    <div>
      <h2>NBA Games for Test Date</h2>
      {games.length > 0 ? (
        <ul>
          {games.map((game, idx) => (
            <li key={idx}>
              {game.teams?.home?.name} vs {game.teams?.visitors?.name} Final Score: {game.scores.home.points} to {game.scores.visitors.points}
            </li>
          ))}
        </ul>
      ) : (
        <p>No games found.</p>
      )}
    </div>
  );
}