import Image from "next/image";

export default function NbaStandingsCard({ conference }: { conference: any[] }) {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-6 w-80 text-white">

      {/* Standings List */}
      <div className="space-y-2">
        {conference.map((team) => (
          <div
            key={team.team.id} // unique key
            className="flex items-center justify-between bg-gray-800 rounded-lg px-3 py-2"
          >
            {/* Rank */}
            <span className="w-6 text-sm font-bold text-gray-400">
              {team.conference.rank}
            </span>

            {/* Logo + Name */}
            <div className="flex items-center gap-2 flex-1">
              <div className="relative w-6 h-6">
                <Image
                  src={team.team.logo}
                  alt={team.team.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="truncate">{team.team.name}</span>
            </div>

            {/* Record */}
            <span className="text-sm text-gray-300">
              {team.conference.win}-{team.conference.loss}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
