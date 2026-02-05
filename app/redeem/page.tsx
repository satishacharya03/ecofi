import AppShell from "../components/AppShell";

const offers = [
  { title: "1GB Data Pack", coins: 100, description: "Valid for 7 days" },
  { title: "3GB Data Pack", coins: 260, description: "Valid for 14 days" },
  { title: "Unlimited 1 Hour", coins: 150, description: "Instant Wi-Fi voucher" }
];

export default function RedeemPage() {
  return (
    <AppShell
      activePath="/redeem"
      title="Redemption Store"
      subtitle="Exchange Eco-Coins for data coupons and Wi-Fi codes."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-text-main-light dark:text-white">Available Rewards</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {offers.map((offer) => (
              <div
                key={offer.title}
                className="p-4 rounded-xl bg-background-light dark:bg-background-dark border border-transparent hover:border-primary/30 transition-all"
              >
                <h4 className="text-sm font-semibold text-text-main-light dark:text-white">{offer.title}</h4>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1">{offer.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-text-main-light dark:text-white">{offer.coins} Coins</span>
                  <button className="px-3 py-1 rounded-full bg-primary text-black text-xs font-bold">Redeem</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-text-main-light dark:text-white">Your Balance</h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-muted-light dark:text-text-muted-dark">Available Coins</span>
              <span className="text-lg font-bold text-text-main-light dark:text-white">1,250</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-muted-light dark:text-text-muted-dark">Pending Rewards</span>
              <span className="text-sm font-bold text-text-main-light dark:text-white">1 voucher</span>
            </div>
            <div className="p-4 rounded-lg bg-[#e7f3eb] dark:bg-[#1e3a29]">
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Suggested</p>
              <p className="text-sm font-semibold text-text-main-light dark:text-white">Redeem 1GB Data Pack</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-text-main-light dark:text-white">Recent Redemptions</h3>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between bg-background-light dark:bg-background-dark rounded-lg p-4">
            <div>
              <p className="text-sm font-semibold text-text-main-light dark:text-white">1GB Data Pack</p>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Redeemed yesterday</p>
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/40 dark:text-green-400 px-2 py-1 rounded-full">
              Code sent
            </span>
          </div>
          <div className="flex items-center justify-between bg-background-light dark:bg-background-dark rounded-lg p-4">
            <div>
              <p className="text-sm font-semibold text-text-main-light dark:text-white">Unlimited 1 Hour</p>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Redeemed 3 days ago</p>
            </div>
            <span className="text-xs font-bold text-text-main-light dark:text-white">Redeemed</span>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
