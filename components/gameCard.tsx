import { sampleGamesData } from "@/data/gameSampleData";
import { Game } from "@/types/nba";
import { useState } from "react";

type GameCardProps = {
  game: Game;
};


export default function GameCard({ game }: { game: any }) {
  const homePoints = game.scores.home.points;
  const visitorPoints = game.scores.visitors.points;

  const homeWinner = homePoints > visitorPoints;



  return <div key={game.id} className="border border-white max-w-md mx-auto bg-gray-900 rounded-lg shadow-lg p-6 text-gray-400 font-sans">
    <div className={homeWinner ? "text-white " : ""}>{game.teams.home.name}: {game.scores.home.points}</div>
    <div className={!homeWinner ? "text-white " : ""}>{game.teams.visitors.name}: {game.scores.visitors.points}</div>
    </div>;
}