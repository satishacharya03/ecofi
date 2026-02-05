import AppShell from "../components/AppShell";

const transactions = [
  { title: "Recycled 5 Bottles", location: "Central Park Station", delta: "+50", time: "2h ago" },
  { title: "Redeemed 1GB Data", location: "Eco-Fi Store", delta: "-100", time: "Yesterday" },
  { title: "Recycled 3 Bottles", location: "Community Library", delta: "+30", time: "Mon" }
];

export default function WalletPage() {
  return (
    <AppShell
      activePath="/wallet"
      title="Wallet"
      subtitle="Track your Eco-Coins balance and redemption history."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-text-main-light dark:text-white">Balance Overview</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#e7f3eb] dark:bg-[#1e3a29] rounded-lg p-4">
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Available Coins</p>
              <p className="text-2xl font-bold text-text-main-light dark:text-white">1,250</p>
            </div>
            <div className="bg-background-light dark:bg-background-dark rounded-lg p-4 border border-dashed border-[#e7f3eb] dark:border-[#1e3a29]">
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Locked Coins</p>
              <p className="text-2xl font-bold text-text-main-light dark:text-white">120</p>
            </div>
            <div className="bg-background-light dark:bg-background-dark rounded-lg p-4 border border-dashed border-[#e7f3eb] dark:border-[#1e3a29]">
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Data Credits</p>
              <p className="text-2xl font-bold text-text-main-light dark:text-white">5.2 GB</p>
            </div>
          </div>
          <div className="mt-6 p-4 rounded-lg border border-[#e7f3eb] dark:border-[#1e3a29] flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-text-main-light dark:text-white">Exchange Rate</p>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark">1 Bottle = 10 Coins · 100 Coins = 1GB</p>
            </div>
            <button className="px-4 py-2 rounded-full bg-primary text-black text-sm font-bold">Top Up</button>
          </div>
        </div>
        <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-text-main-light dark:text-white">Wallet Health</h3>
          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Coins earned this week</p>
              <span className="text-sm font-bold text-text-main-light dark:text-white">+240</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Redemptions</p>
              <span className="text-sm font-bold text-text-main-light dark:text-white">2</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Fraud checks</p>
              <span className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/40 dark:text-green-400 px-2 py-1 rounded-full">
                Passed
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-text-main-light dark:text-white">Recent Transactions</h3>
          <button className="text-sm font-bold text-primary">Export</button>
        </div>
        <div className="mt-4 space-y-3">
          {transactions.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between bg-background-light dark:bg-background-dark rounded-lg p-4 border border-transparent hover:border-primary/30 transition-colors"
            >
              <div>
                <p className="text-sm font-semibold text-text-main-light dark:text-white">{item.title}</p>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">{item.location}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-text-main-light dark:text-white">{item.delta} Coins</p>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
