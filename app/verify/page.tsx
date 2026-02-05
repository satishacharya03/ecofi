import AppShell from "../components/AppShell";

export default function VerifyPage() {
  return (
    <AppShell
      activePath="/verify"
      title="Drop-off Verification"
      subtitle="Show this QR to the shopkeeper to confirm your handoff."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-text-main-light dark:text-white">Handshake Protocol</h3>
            <span className="text-xs font-bold text-primary">Session active</span>
          </div>
          <div className="mt-6 bg-background-light dark:bg-background-dark rounded-xl p-6 flex flex-col items-center text-center">
            <div className="size-44 rounded-xl bg-white dark:bg-[#0d1b12] border border-[#e7f3eb] dark:border-[#1e3a29] flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-primary">qr_code</span>
            </div>
            <p className="text-sm font-semibold text-text-main-light dark:text-white mt-4">
              Ask the shopkeeper to scan your QR code.
            </p>
            <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-2">
              Verification expires in 4:32 minutes.
            </p>
            <button className="mt-4 px-4 py-2 rounded-full bg-primary text-black text-sm font-bold">Refresh Code</button>
          </div>
        </div>
        <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-text-main-light dark:text-white">Drop-off Details</h3>
          <div className="mt-4 space-y-3">
            <div>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Location</p>
              <p className="text-sm font-semibold text-text-main-light dark:text-white">Central Park Station</p>
            </div>
            <div>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Bottles</p>
              <p className="text-sm font-semibold text-text-main-light dark:text-white">5 PET bottles</p>
            </div>
            <div>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Expected reward</p>
              <p className="text-sm font-semibold text-text-main-light dark:text-white">+50 Eco-Coins</p>
            </div>
          </div>
          <div className="mt-5 p-4 rounded-lg bg-[#e7f3eb] dark:bg-[#1e3a29]">
            <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Shopkeeper status</p>
            <p className="text-sm font-semibold text-text-main-light dark:text-white">Waiting for scan</p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
