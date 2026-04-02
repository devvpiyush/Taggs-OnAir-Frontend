// External Modules
import { Link, useOutletContext } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

// Assets
import HomeIcon from "@icon/Home.svg";
import ExploreIcon from "@icon/Explore.svg";
import SearchIcon from "@icon/Search.svg";
import ChatsIcon from "@icon/Chats.svg";

function Navigator() {
  // Constants
  const { me } = useOutletContext();
  return (
    <div className="fixed bottom-0 z-10 w-full px-6 py-4 flex flex-row items-center justify-between border border-t-(--primary-border-color)">
      <Link to="/">
        <img
          src={HomeIcon}
          alt="Home_Icon"
          width={30}
          height={30}
          className="cursor-pointer"
        />
      </Link>
      <img
        src={ExploreIcon}
        alt="Explore_Icon"
        width={30}
        height={30}
        className="cursor-pointer"
      />
      <Link to="/search">
        <img
          src={SearchIcon}
          alt="Search_Icon"
          width={30}
          height={30}
          className="cursor-pointer"
        />
      </Link>
      <img
        src={ChatsIcon}
        alt="Chats_Icon"
        width={30}
        height={30}
        className="cursor-pointer"
      />
      {me?.isLoading ? (
        <Skeleton
          variant="circular"
          width={32}
          height={32}
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
            src={me?.data?.profilePictureUrl || "https://res.cloudinary.com/dtgta9nbo/image/upload/q_auto/f_auto/v1775106730/No_Profile_Picture_Icon_Tiktok_snc7gr.jpg"}
            alt="User_Profile_Picture"
            className="min-w-8 max-w-8 min-h-8 max-h-8 rounded-full object-cover object-center shadow-sm cursor-pointer"
          />
        </Link>
      )}
    </div>
  );
}

export default Navigator;
