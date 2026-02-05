import type { ReactNode } from "react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Dashboard", icon: "dashboard" },
  { href: "/wallet", label: "Wallet", icon: "account_balance_wallet" },
  { href: "/map", label: "Map", icon: "map" },
  { href: "/community", label: "Community", icon: "groups" },
  { href: "/scan", label: "Scan", icon: "qr_code_scanner" },
  { href: "/redeem", label: "Redeem", icon: "redeem" },
  { href: "/settings", label: "Settings", icon: "settings" }
];

type AppShellProps = {
  activePath: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function AppShell({ activePath, title, subtitle, children }: AppShellProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="hidden lg:flex w-72 flex-col bg-card-light dark:bg-card-dark border-r border-[#e7f3eb] dark:border-[#1e3a29] h-full transition-colors duration-200">
        <div className="p-8 pb-4">
          <div className="flex items-center gap-3">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-full size-10 shadow-sm"
              data-alt="Green leaf abstract icon"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHnXLHX5PDN5fv0Rp9cRZ5AWIDCOOCC3fuyacfo0qo0vT2F7pAdhi-BZlhQSJXPb_7p44yyAwIqhmEQkUL6ZhUQausNSj2zaVVzgTibc6rBFbzX_OffY3Mx1ohAIpzZlKuWUeXZBFOGQniQO8qJJccTSnY1MM3kry2NwYU885KfPVMBj_wS_jyB_odqw2IehGdmq6LACuprtPqtKmdcbBznX5p3oOdVZUr9s5NAq8ItcATDAvVpWDKyvskNM61f9uCX534PzabtQ")'
              }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-text-main-light dark:text-white text-lg font-bold leading-none">Eco-Fi</h1>
              <p className="text-text-muted-light dark:text-text-muted-dark text-xs font-medium mt-1">
                Recycle &amp; Earn
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-4 py-4 flex-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = item.href === activePath;
            return (
              <Link
                key={item.href}
                className={
                  isActive
                    ? "flex items-center gap-4 px-5 py-3.5 rounded-full bg-primary/20 dark:bg-primary/10 text-primary dark:text-primary transition-all"
                    : "flex items-center gap-4 px-5 py-3.5 rounded-full text-text-main-light dark:text-text-main-dark hover:bg-[#e7f3eb] dark:hover:bg-[#1e3a29] transition-all group"
                }
                href={item.href}
              >
                <span
                  className={
                    isActive
                      ? "material-symbols-outlined"
                      : "material-symbols-outlined text-text-muted-light dark:text-text-muted-dark group-hover:text-text-main-light dark:group-hover:text-text-main-dark"
                  }
                >
                  {item.icon}
                </span>
                <span className={isActive ? "text-sm font-bold" : "text-sm font-medium"}>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="flex items-center justify-between px-8 py-5 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-4 lg:hidden">
            <button className="p-2 -ml-2 text-text-main-light dark:text-text-main-dark">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div
              className="bg-center bg-no-repeat bg-cover rounded-full size-8"
              data-alt="Green leaf abstract icon"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIhM6YLNWGO4wKBFbgS1DT6iIRUeFgSEn1zsMpFri7OkWEy5LEAQllDSa3MHJ9pwhJCbF2XsKRM5Fhz3SdqdUC56aV28X-dGiGRdJusmVfZIVD0Dq19XzTtce2ZT6674cgGwnfbNXPIc2RqsfE0pkgR_AM-lVqt6PRhZR-3xjicM-KgZtTVIqaD6sMTVgImotnPRhW_v1808OlKLzGH0gRwikb6x1LIkHDhquQiHkB8WnPQXFSN7n0ZuFJyDW8zkr1NxtiVncUkA")'
              }}
            ></div>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <h2 className="text-xl font-bold tracking-tight">{title}</h2>
          </div>
          <div className="flex items-center gap-4 flex-1 justify-end">
            <div className="hidden md:flex items-center bg-card-light dark:bg-card-dark rounded-full px-4 py-2.5 shadow-sm max-w-xs w-full border border-transparent focus-within:border-primary/50 transition-colors">
              <span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark">search</span>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm w-full text-text-main-light dark:text-white placeholder-text-muted-light dark:placeholder-text-muted-dark"
                placeholder="Search locations, rewards..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center justify-center size-10 rounded-full bg-card-light dark:bg-card-dark text-text-main-light dark:text-white shadow-sm hover:bg-[#e7f3eb] dark:hover:bg-[#1e3a29] transition-colors relative">
                <span className="material-symbols-outlined text-[20px]">notifications</span>
                <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border border-white dark:border-card-dark"></span>
              </button>
              <button className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-card-light dark:bg-card-dark shadow-sm hover:shadow-md transition-shadow">
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-full size-8"
                  data-alt="User profile portrait of Alex"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBqBA0MeR7BLOK9mNNSqXE63g8wfP922KdA8uuCatK74Nw8O3Udfe46Ac8YxkoxEeNFqC_8Lh53pB2mfo9p9JvlWl4skrQ-Rl9NC29ejFshdlkDzdpbisbTBqTbSBz_-M7tGI-H4Iai0tG7_9CmFXVmxC17SPBbV4WVCIxxhGagpXN8Ooto7PxMzdZSDHQEWylu7VcuSGUk0GVjQmdXVunJ4knVLK99jPeacYvhqotYiOhlsNh-syjpRtLeOgg-Jz2TtCZNCbhqA")'
                  }}
                ></div>
                <span className="text-sm font-bold mr-1 hidden sm:block">Alex M.</span>
                <span className="material-symbols-outlined text-sm text-text-muted-light">expand_more</span>
              </button>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 scroll-smooth pb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-text-main-light dark:text-white">{title}</h1>
              {subtitle ? (
                <p className="text-text-muted-light dark:text-text-muted-dark mt-1">{subtitle}</p>
              ) : null}
            </div>
            <div className="flex gap-3">
              <Link
                href="/scan"
                className="flex items-center gap-2 px-5 py-2.5 bg-card-light dark:bg-card-dark rounded-full shadow-sm text-sm font-bold hover:shadow-md transition-shadow"
              >
                <span className="material-symbols-outlined text-primary text-[20px]">qr_code_scanner</span>
                <span>Scan Bottle</span>
              </Link>
              <Link
                href="/redeem"
                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-black rounded-full shadow-sm text-sm font-bold hover:shadow-md transition-shadow"
              >
                <span className="material-symbols-outlined text-[20px]">wifi</span>
                <span>Redeem Data</span>
              </Link>
            </div>
          </div>

          {children}
        </div>
      </main>
    </div>
  );
}
