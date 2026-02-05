import AppShell from "../components/AppShell";

const locations = [
  {
    name: "Central Park Station",
    status: "Open 24/7",
    distance: "300m",
    type: "Smart Bin"
  },
  {
    name: "Community Library",
    status: "Closes 8PM",
    distance: "1.2km",
    type: "Drop Center"
  },
  {
    name: "Metro Mall",
    status: "Open 24/7",
    distance: "2.5km",
    type: "Smart Bin"
  }
];

export default function MapPage() {
  return (
    <AppShell
      activePath="/map"
      title="Drop-off Map"
      subtitle="Find the nearest Eco-Bin or partner shop."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-text-main-light dark:text-white">Nearby Locations</h3>
            <button className="text-xs font-bold text-primary">Filter</button>
          </div>
          <div className="mt-4 space-y-3">
            {locations.map((location) => (
              <div
                key={location.name}
                className="p-4 rounded-lg bg-background-light dark:bg-background-dark border border-transparent hover:border-primary transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-text-main-light dark:text-white">{location.name}</h4>
                  <span className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/40 dark:text-green-400 px-2 py-0.5 rounded-full">
                    {location.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-text-muted-light dark:text-text-muted-dark">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">distance</span> {location.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">sensors</span> {location.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-card-light dark:bg-card-dark rounded-xl shadow-sm overflow-hidden relative min-h-[360px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            data-alt="Map of city streets with navigation markers"
            data-location="New York City"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtOY2d3vIHPX5p9rhSswmdIqTKb_9MDq95FVun4cs3ReIjxd6YtYlGrGL-QhEkp2yDk7fGgPUFCRcA9HeVmE4XTKN7GA58hlVm-dHJMHQ8bM13VC8gone4iocW0ZAF6xsZWu9bIlN95p10An6OGnb_pYMj2BX8NJzuPOiUU2cADOA2NtMV4nqBLV1xOPgQdlOhY5BuTFhJ64kW5Y2NIX_PrIUjAMVy1COR9dL3fLYaEoxdh9NWNkbVepAmMfUP-AMDOCgEf8wcyA")'
            }}
          ></div>
          <div className="absolute top-4 left-4 bg-white/90 dark:bg-card-dark/90 rounded-full px-4 py-2 shadow-md flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">my_location</span>
            <span className="text-sm font-semibold text-text-main-light dark:text-white">You are here</span>
          </div>
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button className="size-10 bg-white dark:bg-card-dark rounded-full shadow-md flex items-center justify-center text-text-main-light dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
              <span className="material-symbols-outlined">my_location</span>
            </button>
            <button className="size-10 bg-white dark:bg-card-dark rounded-full shadow-md flex items-center justify-center text-text-main-light dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
              <span className="material-symbols-outlined">layers</span>
            </button>
          </div>
          <div className="absolute bottom-6 left-6 bg-white/95 dark:bg-card-dark/95 rounded-xl shadow-lg p-4 max-w-xs">
            <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Suggested Drop-off</p>
            <h4 className="text-base font-bold text-text-main-light dark:text-white">Central Park Station</h4>
            <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1">300m • Open 24/7</p>
            <button className="mt-3 w-full py-2 rounded-full bg-primary text-black text-sm font-bold">
              Start Navigation
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
