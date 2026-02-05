export default function HomePage() {
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
          <a
            className="flex items-center gap-4 px-5 py-3.5 rounded-full bg-primary/20 dark:bg-primary/10 text-primary dark:text-primary transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-bold">Dashboard</span>
          </a>
          <a
            className="flex items-center gap-4 px-5 py-3.5 rounded-full text-text-main-light dark:text-text-main-dark hover:bg-[#e7f3eb] dark:hover:bg-[#1e3a29] transition-all group"
            href="#"
          >
            <span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark group-hover:text-text-main-light dark:group-hover:text-text-main-dark">
              account_balance_wallet
            </span>
            <span className="text-sm font-medium">Wallet</span>
          </a>
          <a
            className="flex items-center gap-4 px-5 py-3.5 rounded-full text-text-main-light dark:text-text-main-dark hover:bg-[#e7f3eb] dark:hover:bg-[#1e3a29] transition-all group"
            href="#"
          >
            <span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark group-hover:text-text-main-light dark:group-hover:text-text-main-dark">
              map
            </span>
            <span className="text-sm font-medium">Map</span>
          </a>
          <a
            className="flex items-center gap-4 px-5 py-3.5 rounded-full text-text-main-light dark:text-text-main-dark hover:bg-[#e7f3eb] dark:hover:bg-[#1e3a29] transition-all group"
            href="#"
          >
            <span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark group-hover:text-text-main-light dark:group-hover:text-text-main-dark">
              groups
            </span>
            <span className="text-sm font-medium">Community</span>
          </a>
          <div className="mt-auto pt-4 border-t border-[#e7f3eb] dark:border-[#1e3a29]">
            <a
              className="flex items-center gap-4 px-5 py-3.5 rounded-full text-text-main-light dark:text-text-main-dark hover:bg-[#e7f3eb] dark:hover:bg-[#1e3a29] transition-all group"
              href="#"
            >
              <span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark group-hover:text-text-main-light dark:group-hover:text-text-main-dark">
                settings
              </span>
              <span className="text-sm font-medium">Settings</span>
            </a>
          </div>
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
            <h2 className="text-xl font-bold tracking-tight">User Dashboard</h2>
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
              <h1 className="text-2xl md:text-3xl font-bold text-text-main-light dark:text-white">
                Hello, Alex! 👋
              </h1>
              <p className="text-text-muted-light dark:text-text-muted-dark mt-1">
                You&apos;ve saved <span className="text-primary font-bold">5.2kg</span> of plastic this
                month.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-card-light dark:bg-card-dark rounded-full shadow-sm text-sm font-bold hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-primary text-[20px]">data_usage</span>
                <span>Data Plan: Active</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-card-light dark:bg-card-dark rounded-xl p-8 shadow-sm flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute right-0 top-0 h-full w-1/2 opacity-5 dark:opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent pointer-events-none"></div>
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <p className="text-text-muted-light dark:text-text-muted-dark font-medium mb-1 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">savings</span>
                    Eco-Coins Balance
                  </p>
                  <h2 className="text-5xl font-extrabold text-text-main-light dark:text-white tracking-tight">
                    1,250
                  </h2>
                  <div className="inline-flex items-center gap-1 mt-3 px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold">
                    <span className="material-symbols-outlined text-[14px]">trending_up</span>
                    +12% this week
                  </div>
                </div>
                <div className="size-24 rounded-full border-8 border-[#e7f3eb] dark:border-[#1e3a29] flex items-center justify-center relative">
                  <svg className="size-full -rotate-90 absolute top-0 left-0" viewBox="0 0 100 100">
                    <circle
                      className="text-transparent"
                      cx="50"
                      cy="50"
                      fill="transparent"
                      r="46"
                      stroke="currentColor"
                      strokeWidth="8"
                    ></circle>
                    <circle
                      cx="50"
                      cy="50"
                      fill="transparent"
                      r="46"
                      stroke="#13ec5b"
                      strokeDasharray="289"
                      strokeDashoffset="70"
                      strokeLinecap="round"
                      strokeWidth="8"
                    ></circle>
                  </svg>
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-medium text-text-muted-light dark:text-text-muted-dark">
                      Level
                    </span>
                    <span className="text-xl font-bold text-text-main-light dark:text-white">4</span>
                  </div>
                </div>
              </div>
              <div className="relative z-10 grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-dashed border-gray-200 dark:border-gray-700">
                <div>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-1">
                    Plastic Saved
                  </p>
                  <p className="text-xl font-bold text-text-main-light dark:text-white">
                    5.2 kg{" "}
                    <span className="text-sm font-normal text-text-muted-light dark:text-text-muted-dark">
                      / 10kg goal
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-1">
                    Data Earned
                  </p>
                  <p className="text-xl font-bold text-text-main-light dark:text-white">5.2 GB</p>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-xl p-8 shadow-lg shadow-primary/20 flex flex-col items-center justify-center text-center relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="bg-white/20 p-4 rounded-full mb-4 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                <span className="material-symbols-outlined text-4xl text-black">qr_code_scanner</span>
              </div>
              <h3 className="text-2xl font-black text-black mb-2">Quick Scan</h3>
              <p className="text-black/70 text-sm font-medium mb-6 max-w-[200px]">
                Ready to recycle? Scan your plastic items now.
              </p>
              <button className="w-full py-3 bg-black text-white font-bold rounded-full hover:bg-gray-900 transition-colors shadow-lg">
                Open Scanner
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4 px-1">
              <h3 className="text-lg font-bold text-text-main-light dark:text-white">Milestones &amp; Activity</h3>
              <a className="text-sm font-bold text-primary hover:text-primary/80" href="#">
                View All
              </a>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
              <div className="min-w-[240px] bg-card-light dark:bg-card-dark p-5 rounded-lg border border-transparent hover:border-primary/20 transition-all shadow-sm flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full text-blue-600 dark:text-blue-400">
                    <span className="material-symbols-outlined">water_drop</span>
                  </div>
                  <span className="text-xs font-bold bg-[#e7f3eb] dark:bg-[#1e3a29] text-text-main-light dark:text-white px-2 py-1 rounded-full">
                    New Badge
                  </span>
                </div>
                <h4 className="font-bold text-text-main-light dark:text-white mb-1">Ocean Saver</h4>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
                  Prevented 100 bottles from entering waterways.
                </p>
              </div>

              <div className="min-w-[240px] bg-card-light dark:bg-card-dark p-5 rounded-lg border border-transparent hover:border-primary/20 transition-all shadow-sm flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600 dark:text-green-400">
                    <span className="material-symbols-outlined">recycling</span>
                  </div>
                  <span className="text-xs font-bold text-text-muted-light dark:text-text-muted-dark">2h ago</span>
                </div>
                <h4 className="font-bold text-text-main-light dark:text-white mb-1">Recycled 5 Bottles</h4>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Central Park Station</p>
                <p className="text-sm font-bold text-primary mt-2">+50 Coins</p>
              </div>

              <div className="min-w-[240px] bg-card-light dark:bg-card-dark p-5 rounded-lg border border-transparent hover:border-primary/20 transition-all shadow-sm flex flex-col opacity-70">
                <div className="flex items-start justify-between mb-3">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full text-purple-600 dark:text-purple-400">
                    <span className="material-symbols-outlined">emoji_events</span>
                  </div>
                  <span className="text-xs font-bold text-text-muted-light dark:text-text-muted-dark">Locked</span>
                </div>
                <h4 className="font-bold text-text-main-light dark:text-white mb-1">10kg Club</h4>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
                  Save 4.8kg more to unlock this badge.
                </p>
                <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div className="bg-purple-500 h-full w-[52%] rounded-full"></div>
                </div>
              </div>

              <div className="min-w-[240px] bg-card-light dark:bg-card-dark p-5 rounded-lg border border-transparent hover:border-primary/20 transition-all shadow-sm flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full text-orange-600 dark:text-orange-400">
                    <span className="material-symbols-outlined">wifi</span>
                  </div>
                  <span className="text-xs font-bold text-text-muted-light dark:text-text-muted-dark">Yesterday</span>
                </div>
                <h4 className="font-bold text-text-main-light dark:text-white mb-1">Redeemed 1GB</h4>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Converted 500 Coins</p>
              </div>
            </div>
          </div>

          <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-[#e7f3eb] dark:border-[#1e3a29] flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-text-main-light dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  Nearby Drop-off Points
                </h3>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-1">
                  Find the nearest smart bin to recycle.
                </p>
              </div>
              <button className="hidden sm:flex items-center gap-2 text-sm font-bold text-primary hover:bg-primary/10 px-4 py-2 rounded-full transition-colors">
                View Full Map
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[400px]">
              <div className="p-4 lg:border-r border-[#e7f3eb] dark:border-[#1e3a29] max-h-[400px] overflow-y-auto">
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-[#e7f3eb] dark:bg-[#1e3a29] border border-transparent hover:border-primary transition-all cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-text-main-light dark:text-white">Central Park Station</h4>
                      <span className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/40 dark:text-green-400 px-2 py-0.5 rounded-full">
                        Open 24/7
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-text-muted-light dark:text-text-muted-dark mb-3">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">distance</span> 300m
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">sensors</span> Smart Bin
                      </span>
                    </div>
                    <button className="w-full py-2 bg-white dark:bg-black/20 rounded-lg text-xs font-bold text-text-main-light dark:text-white hover:bg-white/80 transition-colors">
                      Navigate
                    </button>
                  </div>

                  <div className="p-4 rounded-lg bg-background-light dark:bg-background-dark border border-transparent hover:border-primary transition-all cursor-pointer hover:bg-[#e7f3eb] dark:hover:bg-[#1e3a29]">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-text-main-light dark:text-white">Community Library</h4>
                      <span className="text-xs font-bold text-orange-600 bg-orange-100 dark:bg-orange-900/40 dark:text-orange-400 px-2 py-0.5 rounded-full">
                        Closes 8PM
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-text-muted-light dark:text-text-muted-dark">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">distance</span> 1.2km
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">warehouse</span> Drop Center
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-background-light dark:bg-background-dark border border-transparent hover:border-primary transition-all cursor-pointer hover:bg-[#e7f3eb] dark:hover:bg-[#1e3a29]">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-text-main-light dark:text-white">Metro Mall</h4>
                      <span className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/40 dark:text-green-400 px-2 py-0.5 rounded-full">
                        Open 24/7
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-text-muted-light dark:text-text-muted-dark">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">distance</span> 2.5km
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">sensors</span> Smart Bin
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-1 lg:col-span-2 relative bg-gray-200 dark:bg-gray-800 h-[300px] lg:h-auto">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-alt="Map of city streets with navigation markers"
                  data-location="New York City"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtOY2d3vIHPX5p9rhSswmdIqTKb_9MDq95FVun4cs3ReIjxd6YtYlGrGL-QhEkp2yDk7fGgPUFCRcA9HeVmE4XTKN7GA58hlVm-dHJMHQ8bM13VC8gone4iocW0ZAF6xsZWu9bIlN95p10An6OGnb_pYMj2BX8NJzuPOiUU2cADOA2NtMV4nqBLV1xOPgQdlOhY5BuTFhJ64kW5Y2NIX_PrIUjAMVy1COR9dL3fLYaEoxdh9NWNkbVepAmMfUP-AMDOCgEf8wcyA")'
                  }}
                ></div>

                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button className="size-10 bg-white dark:bg-card-dark rounded-full shadow-md flex items-center justify-center text-text-main-light dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
                    <span className="material-symbols-outlined">my_location</span>
                  </button>
                  <button className="size-10 bg-white dark:bg-card-dark rounded-full shadow-md flex items-center justify-center text-text-main-light dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
                    <span className="material-symbols-outlined">layers</span>
                  </button>
                </div>

                <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
                  <div className="bg-primary text-black text-xs font-bold px-2 py-1 rounded-md mb-1 shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    Central Park Station
                  </div>
                  <div className="size-4 bg-primary rounded-full border-2 border-white shadow-lg animate-bounce"></div>
                  <div className="size-8 bg-primary/30 rounded-full absolute bottom-0 blur-sm -z-10"></div>
                </div>
                <div className="absolute top-1/3 left-1/2 flex flex-col items-center cursor-pointer">
                  <div className="size-3 bg-white dark:bg-gray-700 rounded-full border-2 border-gray-400 dark:border-gray-500 shadow-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
