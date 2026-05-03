// External Modules
import { Link, useOutletContext } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

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
    <aside className="hidden md:flex md:items-center md:flex-col md:justify-between md:sticky md:left-0 md:top-0 w-fit h-dvh pl-4 pr-8 pt-22 pb-4 border border-r-[#232323]">
      <div className="w-full flex flex-col gap-4">
        <Link to="/" className={styles.buttons}>
          <img src={HomeIcon} alt="Home_Icon" width={30} />
        </Link>
        <Link to="/search" className={styles.buttons}>
          <img src={SearchIcon} alt="Home_Icon" width={30} />
        </Link>
        <Link to="/" className={styles.buttons}>
          <img src={ExploreIcon} alt="Home_Icon" width={30} />
        </Link>
        <Link to="/" className={styles.buttons}>
          <img src={ChatsIcon} alt="Home_Icon" width={30} />
        </Link>
        <Link to="/" className={styles.buttons}>
          <img src={NotificationsIcon} alt="Home_Icon" width={30} />
        </Link>
      </div>
      <div className="w-fit p-3 flex flex-row items-center justify-start gap-4 transition-colors self-start ease-in-out duration-200 hover:bg-[#232323] rounded-full cursor-pointer">
        {me?.isLoading ? (
          <Skeleton
            variant="circular"
            width={48}
            height={48}
            sx={{
              bgcolor: "#1a1a1a",
              "::after": {
                background:
                  "linear-gradient(90deg, transparent, #2a2a2a, transparent)",
              },
            }}
            animation="wave"
          />
        ) : (
          <Link to={`/${me?.data?.username}`}>
            <img
              src={
                me?.data?.profilePictureUrl ||
                "https://res.cloudinary.com/dtgta9nbo/image/upload/q_auto/f_auto/v1775106730/No_Profile_Picture_Icon_Tiktok_snc7gr.jpg"
              }
              alt="User_Profile_Picture"
              className="min-w-10 max-w-10 min-h-10 max-h-10 rounded-full object-cover object-center shadow-sm cursor-pointer"
            />
          </Link>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
