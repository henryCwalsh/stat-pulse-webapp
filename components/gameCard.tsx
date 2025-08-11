import { sampleGamesData } from "@/data/gameSampleData";
import { Game } from "@/types/nba";

type GameCardProps = {
  game: Game;
};


export default function GameCard({ game }: { game: any }) {
  return <div>{game.teams.home.name} vs {game.teams.visitors.name}</div>;
}