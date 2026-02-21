function Disclaimer() {
  return (
    <div className="w-full p-3 border-2 border-[#343a40] rounded-xl">
      <p
        className="text-base font-semibold text-white"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Disclaimer
      </p>
      <p
        className="text-sm font-medium text-white tracking-wide"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Taggs is currently in Beta, which means you might notice occasional
        slowdowns, brief crashes, or changes to features as we refine the
        experience.
      </p>
    </div>
  );
}

export default Disclaimer;
