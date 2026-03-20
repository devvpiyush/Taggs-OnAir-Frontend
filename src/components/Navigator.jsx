// External Modules
import { Link, useOutletContext } from "react-router-dom";

// Assets
import HomeIcon from "@icon/Home.svg";
import ExploreIcon from "@icon/Explore.svg";
import SearchIcon from "@icon/Search.svg";
import ChatsIcon from "@icon/Chats.svg";

function Navigator() {
  // Constants
  const { User } = useOutletContext();
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
      <Link to={`/${User?.username}`}>
        <img
          src={
            User?.profilePictureUrl ||
            "https://res.cloudinary.com/dtgta9nbo/image/upload/f_auto,q_auto/v1773724571/f9b2236d-f8cd-46d6-a48d-c978d1ddf0dc.png"
          }
          alt="User_Profile_Picture"
          className="min-w-8 max-w-8 min-h-8 max-h-8 object-cover rounded-full cursor-pointer"
        />
      </Link>
    </div>
  );
}

export default Navigator;
