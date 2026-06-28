function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

      <div
        className="
        absolute
        top-[-200px]
        left-[-200px]
        w-[700px]
        h-[700px]
        rounded-full
        bg-cyan-500/20
        blur-[180px]
        "
      />

      <div
        className="
        absolute
        bottom-[-200px]
        right-[-200px]
        w-[700px]
        h-[700px]
        rounded-full
        bg-blue-500/20
        blur-[180px]
        "
      />

    </div>
  );
}

export default Background;