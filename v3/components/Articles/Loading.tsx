

export default () => (
    <div className="border shadow rounded-xl p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex flex-col space-y-2">
        <div className="rounded-lg bg-slate-700 h-44 w-full"></div>
        {/* two lines at the bottom */}
        <div className="space-y-1 py-1">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-slate-700 rounded"></div>
        </div>
        {/* two lines at the bottom */}
      </div>
    </div>
  );
  