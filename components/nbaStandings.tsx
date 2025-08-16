import Image from "next/image";

export default function NbaStandingsCard({ conference }: { conference: any[] }) {

  // Sort by total wins (home + away) descending
  const rankedConference = [...conference].sort(
    (a, b) => (b.win.home + b.win.away) - (a.win.home + a.win.away)
  );

  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-6 w-80 text-white">

      {/* Standings List */}
      <div className="space-y-2">
        {rankedConference.map((team, index) => (
          <div
            key={team.team.id} // unique key
            className="flex items-center justify-between bg-gray-800 rounded-lg px-3 py-2"
          >
            {/* Rank based on wins */}
            <span className="w-6 text-sm font-bold text-gray-400">
              {index + 1}
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
              {team.win.home + team.win.away}-{team.loss.home + team.loss.away}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
