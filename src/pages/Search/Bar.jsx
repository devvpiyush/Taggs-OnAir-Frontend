// Local Modules
import { useSearch } from "@hook/Func.hooks";

function Bar({ value, UPDATE_SEARCH }) {
  // Constants
  const SearchQuery = useSearch(value);

  return (
    <input
      type="text"
      value={value}
      className="w-full px-4 py-3 outline-none text-md text-white border border-(--primary-border-color) rounded-full tracking-wider"
      style={{ fontFamily: "Poppins, sans-serif" }}
      placeholder="Search..."
      onKeyDown={async (e) => {
        if (e.key === "Enter" && (value !== "" || !value)) {
          await SearchQuery.refetch();
        }
      }}
      onChange={(e) => {
        UPDATE_SEARCH(e.target.value);
      }}
    />
  );
}

export default Bar;
