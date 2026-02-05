import AppShell from "../components/AppShell";

export default function SettingsPage() {
  return (
    <AppShell
      activePath="/settings"
      title="Settings"
      subtitle="Manage your profile, security, and app preferences."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-text-main-light dark:text-white">Profile</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-text-muted-light dark:text-text-muted-dark">Full name</label>
              <input
                className="mt-2 w-full rounded-full px-4 py-2 bg-background-light dark:bg-background-dark border border-[#e7f3eb] dark:border-[#1e3a29]"
                defaultValue="Alex Morgan"
                type="text"
              />
            </div>
            <div>
              <label className="text-xs text-text-muted-light dark:text-text-muted-dark">Phone number</label>
              <input
                className="mt-2 w-full rounded-full px-4 py-2 bg-background-light dark:bg-background-dark border border-[#e7f3eb] dark:border-[#1e3a29]"
                defaultValue="+91 90123 45678"
                type="text"
              />
            </div>
            <div>
              <label className="text-xs text-text-muted-light dark:text-text-muted-dark">Email</label>
              <input
                className="mt-2 w-full rounded-full px-4 py-2 bg-background-light dark:bg-background-dark border border-[#e7f3eb] dark:border-[#1e3a29]"
                defaultValue="alex@ecofi.app"
                type="email"
              />
            </div>
            <div>
              <label className="text-xs text-text-muted-light dark:text-text-muted-dark">City</label>
              <input
                className="mt-2 w-full rounded-full px-4 py-2 bg-background-light dark:bg-background-dark border border-[#e7f3eb] dark:border-[#1e3a29]"
                defaultValue="Mumbai"
                type="text"
              />
            </div>
          </div>
          <button className="mt-6 px-5 py-2 rounded-full bg-primary text-black text-sm font-bold">Save Changes</button>
        </div>
        <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-text-main-light dark:text-white">Security</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-text-main-light dark:text-white">OTP Verification</p>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Required for logins</p>
              </div>
              <span className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/40 dark:text-green-400 px-2 py-1 rounded-full">
                Enabled
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-text-main-light dark:text-white">Fraud Alerts</p>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Notify on duplicate scans</p>
              </div>
              <button className="text-xs font-bold text-primary">Manage</button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-text-main-light dark:text-white">Preferences</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between bg-background-light dark:bg-background-dark rounded-lg p-4">
              <div>
                <p className="text-sm font-semibold text-text-main-light dark:text-white">Offline scanning</p>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Sync when online</p>
              </div>
              <span className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/40 dark:text-green-400 px-2 py-1 rounded-full">
                On
              </span>
            </div>
            <div className="flex items-center justify-between bg-background-light dark:bg-background-dark rounded-lg p-4">
              <div>
                <p className="text-sm font-semibold text-text-main-light dark:text-white">Location sharing</p>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">For nearby bins</p>
              </div>
              <span className="text-xs font-bold text-orange-600 bg-orange-100 dark:bg-orange-900/40 dark:text-orange-400 px-2 py-1 rounded-full">
                Prompt
              </span>
            </div>
          </div>
        </div>
        <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-text-main-light dark:text-white">Help &amp; Support</h3>
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-2">
            Need assistance? Contact Eco-Fi support or check the FAQ for drop-off guidelines.
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <button className="px-4 py-2 rounded-full bg-primary text-black text-sm font-bold">Contact Support</button>
            <button className="px-4 py-2 rounded-full border border-[#e7f3eb] dark:border-[#1e3a29] text-sm font-bold">
              Visit FAQ
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
