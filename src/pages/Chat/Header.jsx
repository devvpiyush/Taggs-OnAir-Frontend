// External Modules
import { Link } from "react-router-dom";

// Assets
import ExitIcon from "@icon/Exit.svg";

function Header({ UserContext }) {
  return (
    <div className="px-6 py-5 md:py-4 flex flex-row gap-4 border-b border-[#232323]">
      <img src={ExitIcon} alt="Exit_Icon" className="md:hidden" />
      <div className="flex flex-row items-center justify-center gap-4">
        <img
          src={UserContext?.profilePictureUrl}
          className="min-w-12 max-w-12 min-h-12 max-h-12 rounded-full"
        />
        <div>
          <Link
            to={`/${UserContext?.username}`}
            className="text-md text-white font-medium cursor-pointer"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {UserContext?.name}
          </Link>
          <h4
            className="text-sm text-gray-500 font-semibold tracking-wide"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            @{UserContext?.username}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
