const PageLoader = () => {
  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-slate-50
      "
    >
      <div
        className="
          flex
          flex-col
          items-center
          gap-4
        "
      >
        <div
          className="
            w-16
            h-16
            border-4
            border-emerald-200
            border-t-emerald-600
            rounded-full
            animate-spin
          "
        />

        <p
          className="
            text-slate-500
            font-medium
          "
        >
          Loading...
        </p>
      </div>
    </div>
  );
};

export default PageLoader;
