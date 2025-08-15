import { Player } from "@/types/nba";

type PlayerRankingsCardProps = {
    player: Player;
}

export default function PlayerRankingsCard({ player }: {player: any}) {
    return (
    <div
      key={player.id}
      className="border border-white max-w-xs mx-auto bg-gray-600 rounded-lg shadow-lg p-2 text-gray-400 font-sans"
    >
      {player.player.firstname} {player.player.lastname} Points: {player.points} Rebounds: {player.totReb} Assists: {player.assists}
    </div>
  );
}