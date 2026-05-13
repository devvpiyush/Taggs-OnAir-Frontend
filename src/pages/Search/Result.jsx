// External Modules
import { Link } from "react-router-dom";

// Local Modules
import { SkeleWithUserPicture } from "@component/profile.components";

// Assets
import VerifiedIcon from "@icon/Verified.svg";

function Result({ username, name, isVerified, profilePictureUrl }) {
  return (
    <div className="w-full bg-blue-900/10 px-4 py-4 rounded-2xl md:rounded-2xl flex flex-row items-center justify-between">
      <div className="flex flex-row gap-2 md:gap-3">
        <SkeleWithUserPicture
          url={profilePictureUrl}
          name={name}
          minTailWidth={"min-w-12"}
          maxTailWidth={"max-w-12"}
          minTailHeigth={"min-h-12"}
          maxTailHeight={"max-h-12"}
        />
        <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            <Link
              to={`/${username}`}
              className="font-semibold text-white tracking-wide"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {name}
            </Link>
            {isVerified && (
              <img src={VerifiedIcon} width={20} alt="Verified_Icon" />
            )}
          </div>
          <p
            className="font-semibold text-gray-400 tracking-wider"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            @{username}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Result;
