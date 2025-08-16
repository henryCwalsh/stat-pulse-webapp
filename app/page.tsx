"use client";
import { useEffect, useState } from "react";
import PlayerRankingsCard from "@/components/playerRankingsCard";
import GameCard from "@/components/gameCard";
import NbaStandingsCard from "@/components/nbaStandings";
import {
  getGamesPerDate,
  getPlayersForDate,
  getStandingsPerConference,
} from "@/lib/nbaApi";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState("2025-02-27");
  const [games, setGames] = useState<any[]>([]);
  const [players, setPlayers] = useState<any[]>([]);
  const [eastStandings, setEastStandings] = useState<any[]>([]);
  const [westStandings, setWestStandings] = useState<any[]>([]);
  const [loadingPlayers, setLoadingPlayers] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoadingPlayers(true);

      // Fetch games
      const gamesData = await getGamesPerDate(selectedDate);
      setGames(gamesData?.response || []);

      // Fetch players sequentially to avoid throttling
      try {
        const playersData = await getPlayersForDate(selectedDate);
        setPlayers(playersData || []);
      } catch (err) {
        console.error("Failed to load players:", err);
        setPlayers([]);
      } finally {
        setLoadingPlayers(false);
      }
    }

    fetchData();
  }, [selectedDate]);

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
      <div className="min-h-screen bg-black flex flex-row gap-40">
        {/* Player Rankings */}
        <div className="flex flex-col gap-4 mb-8 p-10">
          {loadingPlayers ? (
            <p className="text-white">Loading top players...</p>
          ) : players.length > 0 ? (
            players
              .slice()
              .sort((a: any, b: any) => (b.points || 0) - (a.points || 0))
              .slice(0, 10)
              .map((player: any, index: number) => (
                <PlayerRankingsCard key={player.id || index} player={player} />
              ))
          ) : (
            <p className="text-white">No players found for this date.</p>
          )}
        </div>

        {/* Games */}
        <div>
          <div className="grid grid-cols-3 gap-4 mb-8 p-10">
            {games.map((game: any) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>

        {/* Standings */}
        <div className="flex flex-col gap-8 p-10">
          <NbaStandingsCard conference={eastStandings} />
          <NbaStandingsCard conference={westStandings} />
        </div>
      </div>
    </div>
  );
}
