// Assets
import SearchIcon from "@icon/Search.svg";
import { useSearch } from "@hook/Func.hooks";

function Button({ input }) {
  // Constants
  const SearchQuery = useSearch(input);

  return (
    <div
      className="p-3 border border-(--primary-border-color) hover:border-(--primary-border-hover-color) rounded-full cursor-pointer"
      onClick={
if (input === "") return;
async () => {
        await SearchQuery.refetch();
      }}
    >
      <img src={SearchIcon} alt="" width={28} height={28} />
    </div>
  );
}

export default Button;
