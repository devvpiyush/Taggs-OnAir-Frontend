export function MidnightEdgeButton({ text, onClickFn }) {
  return (
    <button
      type="submit"
      className="w-full py-3 bg-[#181818] border border-[#0353a4] text-white font-semibold rounded-full cursor-pointer tracking-wider"
      style={{ fontFamily: "Poppins, sans-serif" }}
      onClick={onClickFn}
    >
      {text}
    </button>
  );
}

export function ZebraStyleButton({ text, onClickFn }) {
  return (
    <button
      type="button"
      className="w-full py-3 bg-[#181818] border border-(--primary-border-color) text-white font-medium rounded-full cursor-pointer tracking-wide"
      style={{ fontFamily: "Poppins, sans-serif" }}
      onClick={onClickFn}
    >
      {text}
    </button>
  );
}
