function Bar({ value, UPDATE_SEARCH, UPDATE_SEARCH_RESULTS }) {
  return (
    <input
      type="text"
      value={value}
      className="w-full px-4 py-3 outline-none text-md text-white border border-(--primary-border-color) rounded-full tracking-wider"
      style={{ fontFamily: "Poppins, sans-serif" }}
      placeholder="Search..."
      onChange={(e) => {
        UPDATE_SEARCH(e.target.value);
        UPDATE_SEARCH_RESULTS([]);
      }}
    />
  );
}

export default Bar;
