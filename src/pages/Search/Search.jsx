// Local Modules
import Bar from "./Bar";
import Button from "./Button";

function Search() {
  return (
    <div className="w-full p-4 flex flex-row items-center justify-between gap-4 border border-b-(--primary-border-color)">
      <Bar />
      <Button />
    </div>
  );
}

export default Search;
