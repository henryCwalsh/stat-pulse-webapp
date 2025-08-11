import Image from "next/image";
import NbaTest from "@/components/nbaTest";
import GameCard from "@/components/gameCard";
import { sampleGamesData } from "@/data/gameSampleData";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <GameCard game={sampleGamesData.response[0]}></GameCard>
    </div>
  );
}
