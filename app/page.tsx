"use client"
import Image from "next/image";
import NbaTest from "@/components/nbaTest";
import GameCard from "@/components/gameCard";
import { sampleGamesData } from "@/data/gameSampleData";
import { samplePlayersData } from "@/data/playerSampleData";
import { useEffect, useState } from "react";
import PlayerRankingsCard from "@/components/playerRankingsCard";
import { getStandingsPerConference } from "@/lib/nbaApi";
import NbaStandingsCard from "@/components/nbaStandings";

export default function Home() {
  const games = sampleGamesData.response;
  const playerData = samplePlayersData;
  const [eastStandings, setEastStandings] = useState<any[]>([]);
  const [westStandings, setWestStandings] = useState<any[]>([]);

  useEffect(() => {
    async function fetchStandings() {
      const east = await getStandingsPerConference("2024", "east");
      const west = await getStandingsPerConference("2024", "west");

      // Sort by total wins (home + away)
      setEastStandings(
        east.sort((a, b) => a.win.home + a.win.away - (b.win.home + b.win.away))
      );
      setWestStandings(
        west.sort((a, b) => a.win.home + a.win.away - (b.win.home + b.win.away))
      );
    }
    fetchStandings();
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-row">
      <div className="min-h-screen bg-black flex flex-row gap-40 ">
        {/* Player Rankings */}
        <div className="flex flex-col gap-4 mb-8 p-10">
          {samplePlayersData
            .slice()
            .sort((a: any, b: any) => b.points - a.points)
            .slice(0, 10)
            .map((player: any, index: number) => (
              <PlayerRankingsCard key={player.id || index} player={player} />
            ))}
        </div>

        {/* Games */}
        <div>
          <div className="flex flex-row gap-4 mb-8 p-10">
            {games.map((game: any) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>

        {/* Standings */}
<div className="flex flex-col gap-8">
  {/* East Standings */}
  <NbaStandingsCard conference={eastStandings} />

  {/* West Standings */}
  <NbaStandingsCard conference={westStandings} />
</div>
      </div>
    </div>
  );
}
