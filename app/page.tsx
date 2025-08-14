import Image from "next/image";
import NbaTest from "@/components/nbaTest";
import GameCard from "@/components/gameCard";
import { sampleGamesData } from "@/data/gameSampleData";
import { useEffect } from "react";

export default function Home() {

    const games = sampleGamesData.response;

  return (
    <div className="min-h-screen bg-black border">
      <div className="grid grid-cols-3 gap-4">
      {games.map((game: any) => (
        <GameCard key={game.id} game={game} />
      ))}
      </div>
    </div>
  );
}
