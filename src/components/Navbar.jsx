// Assets
import CreateIcon from "@icon/Create.svg";
import NotificationsIcon from "@icon/Notifications.svg";

function Navbar() {
  return (
    <div className="w-full px-6 py-3 flex flex-row items-center justify-between border border-b-(--primary-border-color)">
      <img src={CreateIcon} alt="Create_Icon" className="cursor-pointer" />
      <a
        href="/"
        className="text-white text-3xl font-semibold sm:font-normal tracking-wider cursor-pointer"
        style={{ fontFamily: "Damion, sans-serif" }}
      >
        Taggs
      </a>
      <img
        src={NotificationsIcon}
        alt="Notifications_Icon"
        className="cursor-pointer"
      />
    </div>
  );
}

export default Navbar;
