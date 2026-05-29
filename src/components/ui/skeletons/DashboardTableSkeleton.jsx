const DashboardTableSkeleton = () => {

  return (
    <div
      className="
        bg-white
        rounded-2xl
        p-6
        shadow-sm
        animate-pulse
      "
    >
      <div
        className="
          h-6
          w-52
          bg-slate-200
          rounded
          mb-8
        "
      />

      <div
        className="
          space-y-4
        "
      >
        {[...Array(6)].map(
          (_, index) => (
            <div
              key={index}
              className="
                h-14
                bg-slate-100
                rounded-xl
              "
            />
          )
        )}
      </div>
    </div>
  );
};

export default DashboardTableSkeleton;
