// Assets
import SearchIcon from "@icon/Search.svg";

function Button() {
  return (
    <div className="p-3 border border-(--primary-border-color) hover:border-(--primary-border-hover-color) rounded-full cursor-pointer">
      <img src={SearchIcon} alt="" width={28} height={28} />
    </div>
  );
}

export default Button;
