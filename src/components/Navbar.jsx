// Assets
import CreateIcon from "@icon/Create.svg";
import NotificationsIcon from "@icon/Notifications.svg";

// External Modules
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full px-6 py-3 flex flex-row items-center justify-between bg-[#0d0d0d] border border-b-(--primary-border-color)">
      <Link to="/">
        <img src={CreateIcon} alt="Create_Icon" className="cursor-pointer" />
      </Link>
      <Link
        to="/"
        className="text-white text-3xl font-semibold sm:font-normal tracking-wider cursor-pointer"
        style={{ fontFamily: "Damion, sans-serif" }}
      >
        Taggs
      </Link>
      <img
        src={NotificationsIcon}
        alt="Notifications_Icon"
        className="cursor-pointer"
      />
    </div>
  );
}

export default Navbar;
