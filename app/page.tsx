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
    <div className="min-h-screen bg-black border">
      <div className="grid grid-cols-3 gap-4 mb-8">
        {samplePlayersData.map((player: any) => (
          <PlayerRankingsCard key = {player.id} player={player}/>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
      {games.map((game: any) => (
        <GameCard key={game.id} game={game} />
      ))}
      </div>
    </div>
  );
}
