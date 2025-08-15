import Image from "next/image";
import NbaTest from "@/components/nbaTest";
import GameCard from "@/components/gameCard";
import { sampleGamesData } from "@/data/gameSampleData";
import { samplePlayersData } from "@/data/playerSampleData";
import { useEffect } from "react";
import PlayerRankingsCard from "@/components/playerRankingsCard";

export default function Home() {

    const games = sampleGamesData.response;
    const playerData = samplePlayersData;

  return (
    <div className="min-h-screen bg-black border flex flex-row">
      <div className="grid grid-cols-3 gap-4 mb-8 items-start flex flex-col">
        <div className="flex flex-col gap-4 mb-8">
          {samplePlayersData
            .slice()
            .sort((a: any, b: any) => b.points - a.points)
            .slice(0,10)
            .map((player: any) => (
            <PlayerRankingsCard key={player.id} player={player} />
          ))}
        </div>
      </div>
      <div>
      <div className="grid grid-cols-3 gap-4">
      {games.map((game: any) => (
        <GameCard key={game.id} game={game} />
      ))}
            {games.map((game: any) => (
        <GameCard key={game.id} game={game} />
      ))}
            {games.map((game: any) => (
        <GameCard key={game.id} game={game} />
      ))}
            {games.map((game: any) => (
        <GameCard key={game.id} game={game} />
      ))}
                  {games.map((game: any) => (
        <GameCard key={game.id} game={game} />
      ))}
      



      </div>
      </div>
    </div>
  );
}
