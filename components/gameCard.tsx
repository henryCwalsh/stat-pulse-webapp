import { sampleGamesData } from "@/data/gameSampleData";
import { Game } from "@/types/nba";
import Image from "next/image";
import { useState } from "react";

type GameCardProps = {
  game: Game;
};


export default function GameCard({ game }: { game: any }) {
  const homePoints = game.scores.home.points;
  const visitorPoints = game.scores.visitors.points;

  const homeWinner = homePoints > visitorPoints;



  return (
<div
  key={game.id}
  className="border border-white w-64 h-32 bg-gray-600 rounded-lg shadow-lg p-2 text-gray-400 font-sans"
>
  {/* Home team */}
  <div className="flex items-center pb-2">
    <div className="w-6 h-6 relative flex-shrink-0">
      <Image
        src={game.teams.home.logo}
        alt={`${game.teams.home.name} logo`}
        fill
        className="object-contain"
      />
    </div>
    <span
      className={`${homeWinner ? "text-white" : ""} pl-2 flex-grow truncate`}
    >
      {game.teams.home.nickname}
    </span>
    <div className={`flex-shrink-0 w-8 text-right ${homeWinner ? "text-white" : ""}`}>
      {homePoints}
    </div>
  </div>

  {/* Visitor team */}
  <div className="flex items-center">
    <div className="w-6 h-6 relative flex-shrink-0">
      <Image
        src={game.teams.visitors.logo}
        alt={`${game.teams.visitors.name} logo`}
        fill
        className="object-contain"
      />
    </div>
    <span
      className={`${!homeWinner ? "text-white" : ""} pl-2 flex-grow truncate`}
    >
      {game.teams.visitors.nickname}
    </span>
    <div className={`flex-shrink-0 w-8 text-right ${!homeWinner ? "text-white" : ""}`}>
      {visitorPoints}
    </div>
  </div>
</div>

  );
}