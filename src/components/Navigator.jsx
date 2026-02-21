// External Modules
import { Link } from "react-router-dom";

// Assets
import ProfilePicture from "/Avatar.png";
import HomeIcon from "@icon/Home.svg";
import ExploreIcon from "@icon/Explore.svg";
import SearchIcon from "@icon/Search.svg";
import ChatsIcon from "@icon/Chats.svg";

function Navigator() {
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
      <img
        src={ProfilePicture}
        alt="User_Profile_Picture"
        width={30}
        height={30}
        className="cursor-pointer"
      />
    </div>
  );
}

export default Navigator;
