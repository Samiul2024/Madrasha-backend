const CourseCardSkeleton = () => {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        p-6
        shadow-sm
        animate-pulse
      "
    >
      <div
        className="
          h-6
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
          mb-3
        "
      />

      <div
        className="
          h-4
          bg-slate-200
          rounded
          w-3/4
          mb-6
        "
      />

      <div
        className="
          flex
          gap-3
        "
      >
        <div
          className="
            h-10
            w-24
            rounded-xl
            bg-slate-200
          "
        />

        <div
          className="
            h-10
            w-24
            rounded-xl
            bg-slate-200
          "
        />
      </div>
    </div>
  );
};

export default CourseCardSkeleton;
