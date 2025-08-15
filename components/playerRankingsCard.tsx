import { Player } from "@/types/nba";
import Image from "next/image";

type PlayerRankingsCardProps = {
  player: Player;
};

export default function PlayerRankingsCard({ player }: { player: any }) {
  return (
    <div
      key={player.player.id}
      className="border border-white max-w-xs w-40 mx-auto bg-gray-600 rounded-md shadow-sm p-1.5 text-gray-200 font-sans flex flex-col"
    >
      {/* Top row: Image and Name */}
      <div className="flex items-center mb-1">
        <div className="w-6 h-6 relative flex-shrink-0 rounded-full overflow-hidden border border-gray-400">
          <Image
            src={player.team.logo}
            alt={`${player.player.firstname} ${player.player.lastname} logo`}
            fill
            className="object-contain"
          />
        </div>
        <span className="ml-1 font-semibold text-white truncate text-xs">
          {player.player.firstname} {player.player.lastname}
        </span>
      </div>

      {/* Stats */}
      <div className="flex justify-between text-[10px] text-gray-200">
        <span>Pts: {player.points}</span>
        <span>Reb: {player.totReb}</span>
        <span>Ast: {player.assists}</span>
      </div>
    </div>
  );
}
