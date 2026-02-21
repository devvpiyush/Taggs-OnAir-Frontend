function Opening({ progressLevel }) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-8">
      <h1
        className="text-white text-5xl font-semibold sm:font-medium tracking-wider"
        style={{ fontFamily: "Damion, sans-serif" }}
      >
        Taggs
      </h1>
      <div className="max-w-50 min-w-50 sm:max-w-60 sm:min-w-60 p-1 sm:p-1.8 border border-[#1E1E1E] rounded-full">
        <div
          className={`p-1 sm:p-2 bg-[#2E3440] sm:bg-[#0A0F1C] ${progressLevel > 98 ? "rounded-full" : "rounded-bl-full rounded-tl-full"}`}
          style={{ width: `${progressLevel}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Opening;
