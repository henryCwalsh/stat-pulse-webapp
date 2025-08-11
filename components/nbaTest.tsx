"use client"
import { getGamesPerDate } from "@/lib/nbaApi";
import { useEffect, useState } from "react";

export default function NbaTest(){
    const [games, setGames] = useState<any[]>([]);

    useEffect(() => {
        async function fetchData() {
            console.log("Fetching Christmas Day 2024");
            try{
                const data = await getGamesPerDate("2024-12-25");
                console.log(data);
                setGames(data.response || []);
            } catch(error){
                console.log(error);
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