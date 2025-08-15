"use client"
import { sampleGamesData } from "@/data/gameSampleData";
import { Game } from "@/types/nba";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getPlayersForDate, getPlayersPerGameId } from "@/lib/nbaApi"; // Your API function

type Player = {
  player: { id: number; firstname: string; lastname: string };
  team: { id: number; nickname: string; logo: string };
  points: number;
  game: { id: number };
};

const formatGameStatus = (game: any) => {
  const { long, short, clock } = game.status;

  if (long === "Finished") return "Final";
  if (short === 1) return "Scheduled"; // example: before tip-off
  if (short === 2) return `Live - Q${game.periods.current} ${clock || ""}`;
  return long; // fallback
};

export default function GameCard({ game }: { game: any }) {
  const homePoints = game.scores.home.points;
  const visitorPoints = game.scores.visitors.points;
  const homeWinner = homePoints > visitorPoints;

  const [topScorer, setTopScorer] = useState<Player | null>(null);

  useEffect(() => {
    async function fetchPlayers() {
      const gamePlayers = await getPlayersPerGameId(game.id); // replace with actual date
      // Find top scorer
      const leading = gamePlayers.sort((a, b) => b.points - a.points)[0];
      setTopScorer(leading || null);
    }
    fetchPlayers();
  }, [game.id]);

  const gameStatus = formatGameStatus(game);


  return (
    <div
      key={game.id}
      className="border border-white w-64 h-30 bg-gray-600 rounded-lg shadow-lg p-2 text-gray-400 font-sans"
    >
      {/* Home team */}
      <div className="flex items-center pb-1">
        <div className="w-6 h-6 relative flex-shrink-0">
          <Image
            src={game.teams.home.logo}
            alt={`${game.teams.home.name} logo`}
            fill
            className="object-contain"
          />
        </div>
        <span className={`${homeWinner ? "text-white" : ""} pl-2 flex-grow truncate`}>
          {game.teams.home.nickname}
        </span>
        <div className={`flex-shrink-0 w-8 text-right ${homeWinner ? "text-white" : ""}`}>
          {homePoints}
        </div>
      </div>

      {/* Visitor team */}
      <div className="flex items-center pb-1">
        <div className="w-6 h-6 relative flex-shrink-0">
          <Image
            src={game.teams.visitors.logo}
            alt={`${game.teams.visitors.name} logo`}
            fill
            className="object-contain"
          />
        </div>
        <span className={`${!homeWinner ? "text-white" : ""} pl-2 flex-grow truncate`}>
          {game.teams.visitors.nickname}
        </span>
        <div className={`flex-shrink-0 w-8 text-right ${!homeWinner ? "text-white" : ""}`}>
          {visitorPoints}
        </div>
      </div>
  
      {/* Leading Scorer */}
      {topScorer && (
        <div className="text-xs text-yellow-400 mt-1">
          Top Scorer: {topScorer.player.firstname} {topScorer.player.lastname} ({topScorer.points} pts)
        </div>
      )}
{/* Arena + Status */}
<div className="flex items-start justify-between mt-1 text-xs text-gray-300">
  <div className="flex-1 pr-2 break-words">
    {game.arena.name}, {game.arena.city}
  </div>
  <div className="flex-shrink-0 whitespace-nowrap text-white font-bold">
    {gameStatus}
  </div>
</div>

    </div>
  );
}
