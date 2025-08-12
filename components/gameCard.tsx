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
    <div key={game.id} className="border border-white max-w-md mx-auto bg-gray-900 rounded-lg shadow-lg p-2 text-gray-400 font-sans">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <Image
            src={game.teams.home.logo}
            alt={`${game.teams.home.name} logo`}
            width={24}
            height={24}
          />
          <span className={homeWinner ? "text-white " : ""}>
            {game.teams.home.name}
          </span>
        </div>
        <div className={homeWinner ? "text-white " : ""}>
          {game.scores.home.points}
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <Image
            src={game.teams.visitors.logo}
            alt={`${game.teams.visitors.name} logo`}
            width={24}
            height={24}
          />
          <span className={!homeWinner ? "text-white " : ""}>
            {game.teams.visitors.name}
          </span>
        </div>
        <div className={!homeWinner ? "text-white " : ""}>
          {game.scores.visitors.points}
        </div>
      </div>
    </div>
  );
}