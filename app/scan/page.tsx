import Link from "next/link";
import AppShell from "../components/AppShell";

export default function ScanPage() {
  return (
    <AppShell
      activePath="/scan"
      title="Scan Bottle"
      subtitle="Scan UPC/EAN barcodes to detect PET bottles in under 2 seconds."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-text-main-light dark:text-white">Scanner Preview</h3>
            <span className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/40 dark:text-green-400 px-2 py-1 rounded-full">
              Camera Ready
            </span>
          </div>
          <div className="mt-4 h-72 rounded-xl bg-gradient-to-br from-[#e7f3eb] to-[#c7ead4] dark:from-[#1a3322] dark:to-[#102216] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 border-2 border-dashed border-primary/60 rounded-xl m-6"></div>
            <div className="text-center">
              <span className="material-symbols-outlined text-5xl text-primary">qr_code_scanner</span>
              <p className="text-sm font-semibold text-text-main-light dark:text-white mt-2">Align barcode inside the frame</p>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Offline mode enabled</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button className="flex-1 py-3 rounded-full bg-primary text-black text-sm font-bold">Start Scan</button>
            <Link
              href="/verify"
              className="flex-1 py-3 rounded-full border border-[#e7f3eb] dark:border-[#1e3a29] text-sm font-bold text-center"
            >
              Go to Verification
            </Link>
          </div>
        </div>

        <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-text-main-light dark:text-white">Scan Results</h3>
          <div className="mt-4 space-y-3">
            <div className="p-4 rounded-lg bg-background-light dark:bg-background-dark border border-transparent">
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Latest Detection</p>
              <p className="text-sm font-semibold text-text-main-light dark:text-white">1L Coke Bottle</p>
              <span className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/40 dark:text-green-400 px-2 py-1 rounded-full inline-flex mt-2">
                PET Recyclable
              </span>
            </div>
            <div className="p-4 rounded-lg bg-background-light dark:bg-background-dark border border-transparent">
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Sync Status</p>
              <p className="text-sm font-semibold text-text-main-light dark:text-white">Queued (offline)</p>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1">
                Will sync when connectivity is restored.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background-light dark:bg-background-dark border border-transparent">
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Anti-fraud</p>
              <p className="text-sm font-semibold text-text-main-light dark:text-white">Duplicate scan protection</p>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1">
                Last scan verified 30 mins ago.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
