import Image from "next/image";

export default function NbaStandingsCard({
  conference,
  title,
}: {
  conference?: any[];
  title?: string;
}) {
  if (!conference || !Array.isArray(conference)) {
    return (
      <div className="bg-gray-900 rounded-2xl shadow-lg p-4 w-80 text-white">
        Loading...
      </div>
    );
  }

  const rankedConference = [...conference]
    .sort((a, b) => b.win.home + b.win.away - (a.win.home + a.win.away))
    .slice(0, 10); // top 10

  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-4 w-80 text-white">
      {title && <h2 className="text-lg font-bold mb-2">{title}</h2>}
      <div className="space-y-1 max-h-[400px] overflow-y-auto">
        {rankedConference.map((team, index) => (
          <div
            key={team.team.id}
            className="flex items-center justify-between bg-gray-800 rounded-lg px-2 py-1"
          >
            <span className="w-6 text-sm font-bold text-gray-400">{index + 1}</span>
            <div className="flex items-center gap-1 flex-1">
              <div className="relative w-5 h-5">
                <Image
                  src={team.team.logo}
                  alt={team.team.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="truncate text-sm">{team.team.name}</span>
            </div>
            <span className="text-sm text-gray-300">
              {team.win.home + team.win.away}-{team.loss.home + team.loss.away}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
