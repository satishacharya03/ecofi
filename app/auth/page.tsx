import Link from "next/link";
import AppShell from "../components/AppShell";

export default function AuthPage() {
  return (
    <AppShell
      activePath="/auth"
      title="User Registration"
      subtitle="Sign in with your phone number to start earning Eco-Coins."
    >
      <div className="max-w-3xl bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold text-text-main-light dark:text-white">Phone Verification</h3>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-2">
              We&apos;ll send a one-time password to verify your account.
            </p>
            <div className="mt-4 space-y-3">
              <input
                className="w-full rounded-full px-4 py-2 bg-background-light dark:bg-background-dark border border-[#e7f3eb] dark:border-[#1e3a29]"
                placeholder="Enter phone number"
                type="tel"
              />
              <button className="w-full py-2 rounded-full bg-primary text-black text-sm font-bold">Send OTP</button>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <input
                className="flex-1 rounded-full px-4 py-2 bg-background-light dark:bg-background-dark border border-[#e7f3eb] dark:border-[#1e3a29]"
                placeholder="Enter OTP"
                type="text"
              />
              <button className="px-4 py-2 rounded-full border border-[#e7f3eb] dark:border-[#1e3a29] text-sm font-bold">
                Verify
              </button>
            </div>
          </div>
          <div className="bg-background-light dark:bg-background-dark rounded-xl p-5 border border-dashed border-[#e7f3eb] dark:border-[#1e3a29]">
            <h4 className="text-sm font-bold text-text-main-light dark:text-white">Why Eco-Fi?</h4>
            <ul className="mt-3 space-y-2 text-xs text-text-muted-light dark:text-text-muted-dark">
              <li>• Earn 10 coins for every bottle.</li>
              <li>• Redeem coins for data coupons.</li>
              <li>• Locate nearby Eco-Bins instantly.</li>
              <li>• Track your environmental impact.</li>
            </ul>
            <Link href="/" className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-bold">
              Skip for now
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
