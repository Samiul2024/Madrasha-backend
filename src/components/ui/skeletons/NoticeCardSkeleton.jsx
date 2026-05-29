const NoticeCardSkeleton = () => {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        p-5
        shadow-sm
        animate-pulse
      "
    >
      <div
        className="
          h-5
          bg-slate-200
          rounded
          mb-4
        "
      />

      <div
        className="
          h-4
          bg-slate-200
          rounded
          mb-2
        "
      />

      <div
        className="
          h-4
          bg-slate-200
          rounded
          w-2/3
        "
      />
    </div>
  );
};

export default NoticeCardSkeleton;
