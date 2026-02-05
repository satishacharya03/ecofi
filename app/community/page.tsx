import AppShell from "../components/AppShell";

const leaderboard = [
  { name: "Green Squad", bottles: 520, rank: 1 },
  { name: "Eco Warriors", bottles: 460, rank: 2 },
  { name: "Campus Cyclers", bottles: 405, rank: 3 }
];

export default function CommunityPage() {
  return (
    <AppShell
      activePath="/community"
      title="Community"
      subtitle="Join local challenges and climb the leaderboard."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-text-main-light dark:text-white">Active Challenges</h3>
          <div className="mt-4 space-y-4">
            <div className="p-4 rounded-lg bg-background-light dark:bg-background-dark border border-transparent hover:border-primary/30 transition-all">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-text-main-light dark:text-white">Campus Cleanup Sprint</h4>
                <span className="text-xs font-bold bg-[#e7f3eb] dark:bg-[#1e3a29] text-text-main-light dark:text-white px-2 py-1 rounded-full">
                  3 days left
                </span>
              </div>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-2">
                Recycle 50 bottles with your friends to unlock a bonus data pack.
              </p>
              <div className="mt-3 w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[68%] rounded-full"></div>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-background-light dark:bg-background-dark border border-transparent hover:border-primary/30 transition-all">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-text-main-light dark:text-white">Weekend Drop-off Drive</h4>
                <span className="text-xs font-bold text-primary">Starts Sat</span>
              </div>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-2">
                Visit three partner shops to earn double coins on verified bottles.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-text-main-light dark:text-white">Leaderboard</h3>
          <div className="mt-4 space-y-3">
            {leaderboard.map((team) => (
              <div
                key={team.name}
                className="flex items-center justify-between bg-background-light dark:bg-background-dark rounded-lg p-3"
              >
                <div>
                  <p className="text-sm font-semibold text-text-main-light dark:text-white">#{team.rank} {team.name}</p>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark">{team.bottles} bottles</p>
                </div>
                <span className="material-symbols-outlined text-primary">emoji_events</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-text-main-light dark:text-white">Community Feed</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-3">
              <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">person</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-text-main-light dark:text-white">Aisha earned 30 coins</p>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">at Metro Mall • 1h ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">person</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-text-main-light dark:text-white">Rohan redeemed a 1GB pack</p>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Eco-Fi store • Yesterday</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-text-main-light dark:text-white">Invite Friends</h3>
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-2">
            Earn 20 coins for every friend who completes their first verified drop-off.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <input
              className="flex-1 bg-background-light dark:bg-background-dark rounded-full px-4 py-2 text-sm border border-[#e7f3eb] dark:border-[#1e3a29]"
              placeholder="Enter phone or email"
              type="text"
            />
            <button className="px-4 py-2 rounded-full bg-primary text-black text-sm font-bold">Invite</button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
