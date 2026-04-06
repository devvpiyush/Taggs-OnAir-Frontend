// External Modules
import { Link, useOutletContext } from "react-router-dom";

// Local Modules
import styles from "@style/sidebar.module.css";

// Assets
import HomeIcon from "@icon/Home.svg";
import ExploreIcon from "@icon/Explore.svg";
import SearchIcon from "@icon/Search.svg";
import ChatsIcon from "@icon/Chats.svg";
import CreateIcon from "@icon/Create.svg";
import NotificationsIcon from "@icon/Notifications.svg";
import VerifiedIcon from "@icon/Verified.svg";

function Sidebar() {
  // Constants
  const { me } = useOutletContext();

  return (
    <div className="w-full h-dvh px-4 pb-4 pt-12 flex flex-col items-center justify-between">
      <div className="w-full flex flex-col gap-4">
        <Link to="/" className={styles.buttons}>
          <img src={CreateIcon} alt="Home_Icon" width={30} />
          <p className="text-white text-xl font-semibold">Create</p>
        </Link>
        <Link to="/" className={styles.buttons}>
          <img src={HomeIcon} alt="Home_Icon" width={30} />
          <p className="text-white text-xl font-semibold">Home</p>
        </Link>
        <Link to="/search" className={styles.buttons}>
          <img src={SearchIcon} alt="Home_Icon" width={30} />
          <p className="text-white text-xl font-semibold">Search</p>
        </Link>
        <Link to="/" className={styles.buttons}>
          <img src={ExploreIcon} alt="Home_Icon" width={30} />
          <p className="text-white text-xl font-semibold">Explore</p>
        </Link>
        <Link to="/" className={styles.buttons}>
          <img src={ChatsIcon} alt="Home_Icon" width={30} />
          <p className="text-white text-xl font-semibold">Chats</p>
        </Link>
        <Link to="/" className={styles.buttons}>
          <img src={NotificationsIcon} alt="Home_Icon" width={30} />
          <p className="text-white text-xl font-semibold">Notifications</p>
        </Link>
      </div>
      <div className="py-2 px-4 flex flex-row items-center justify-start gap-4 transition-colors ease-in-out duration-200 hover:bg-[#232323] rounded-xl cursor-pointer">
        <img
          src={
            me?.data?.profilePictureUrl ||
            "https://res.cloudinary.com/dtgta9nbo/image/upload/q_auto/f_auto/v1775106730/No_Profile_Picture_Icon_Tiktok_snc7gr.jpg"
          }
          alt="User_Profile_Picture"
          className="min-w-12 max-w-12 min-h-12 max-h-12 rounded-full object-cover object-center shadow-sm cursor-pointer"
        />
        <div>
          <div className="flex flex-row gap-2">
            <span
              className="font-semibold text-white tracking-wide whitespace-nowrap"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {me?.data?.name}
            </span>
            {me?.data?.isVerified && (
              <img src={VerifiedIcon} width={20} alt="Verified_Icon" />
            )}
          </div>
          <span
            className="text-sm text-gray-400 font-medium tracking-wide"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            @{me?.data?.username}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
