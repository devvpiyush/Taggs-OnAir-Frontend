// Assets
import SearchIcon from "@icon/Search.svg";
import { searchAccount } from "@hook/Func.hooks";

function Button({ input, UPDATE_SEARCH_RESULTS }) {
  return (
    <div
      className="p-3 border border-(--primary-border-color) hover:border-(--primary-border-hover-color) rounded-full cursor-pointer"
      onClick={async () => {
        UPDATE_SEARCH_RESULTS(
          (await searchAccount(input.trim().toLowerCase())) || [],
        );
      }}
    >
      <img src={SearchIcon} alt="" width={28} height={28} />
    </div>
  );
}

export default Button;
