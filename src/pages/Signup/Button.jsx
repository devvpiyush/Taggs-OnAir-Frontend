function Button({ text }) {
  return (
    <button
      type="submit"
      className="w-full py-3 bg-[#181818] border border-[#0353a4] text-white font-semibold rounded-full cursor-pointer tracking-wider"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {text}
    </button>
  );
}

export default Button;
