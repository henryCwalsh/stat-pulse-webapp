"use client";
import Image from "next/image";
import NbaTest from "@/components/nbaTest";
import GameCard from "@/components/gameCard";
import { sampleGamesData } from "@/data/gameSampleData";
import { samplePlayersData } from "@/data/playerSampleData";
import { useEffect, useState } from "react";
import PlayerRankingsCard from "@/components/playerRankingsCard";
import {
  getStandingsPerConference,
  getGamesPerDate,
  getPlayersForDate,
} from "@/lib/nbaApi";
import NbaStandingsCard from "@/components/nbaStandings";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState("2024-12-25");
  const [games, setGames] = useState<any[]>([]);
  const [players, setPlayers] = useState<any[]>([]);
  //const games = sampleGamesData.response;
  //const players = samplePlayersData;
  const [eastStandings, setEastStandings] = useState<any[]>([]);
  const [westStandings, setWestStandings] = useState<any[]>([]);

  {
    /*useEffect(() => {
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
  }, []);*/
  }
  {
    /* Fetch Games/Players for Date Via API */
  }
  useEffect(() => {
    async function fetchGames() {
      try {
        const gamesData = await getGamesPerDate(selectedDate);
        setGames(gamesData.response);
      } catch (error) {
        console.log(error);
        setGames([]);
      }
    }
    fetchGames();

    async function fetchPlayers() {
      try {
        const playersData = await getPlayersForDate(selectedDate);
        setPlayers(playersData.response || []); // handle missing response
      } catch (error) {
        console.log(error);
        setPlayers([]);
      }
    }
    fetchPlayers();
  }, [selectedDate]);

  return (
    <div className="min-h-screen bg-black flex flex-row">
      <div className="min-h-screen bg-black flex flex-row gap-40 ">
        {/* Player Rankings */}
        <div className="flex flex-col gap-4 mb-8 p-10">
          {players && players.length > 0 ? (
            players
              .slice()
              .sort((a: any, b: any) => (b.points || 0) - (a.points || 0))
              .slice(0, 10)
              .map((player: any, index: number) => (
                <PlayerRankingsCard key={player.id || index} player={player} />
              ))
          ) : (
            <p className="text-white">Loading top players...</p>
          )}
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
        <div className="flex flex-col gap-8 p-10">
          {/* East Standings */}
          <NbaStandingsCard conference={eastStandings} />

          {/* West Standings */}
          <NbaStandingsCard conference={westStandings} />
        </div>
      </div>
    </div>
  );
}
