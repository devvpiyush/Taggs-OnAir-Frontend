// External Modules
import { Link, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";

// Local Modules
import API from "@util/api.util.js";
import { SkeleWithUserPicture } from "@component/profile.components";

// Assets
import VerifiedIcon from "@icon/Verified.svg";

function Suggestion({ id, name, username, isVerified, url }) {
  // States
  const [RELATIONSHIP_STATUS, UPDATE_RELATIONSHIP_STATUS] = useState("unknown");

  // Functions
  async function handleFollow(followingId) {
    const result = await API("POST", `follow/follow/${followingId}`);
    if (result) UPDATE_RELATIONSHIP_STATUS(result?.meta?.status);
  }

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex gap-2">
        <SkeleWithUserPicture
          url={url}
          name={name}
          minTailWidth={"min-w-10"}
          maxTailWidth={"max-w-10"}
          minTailHeight={"min-h-10"}
          maxTailHeight={"max-h-10"}
        />
        <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            <Link
              to={`/${username}`}
              className="text-sm text-white font-medium tracking-wide whitespace-nowrap"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {name.length <= 10 ? name : name.slice(0, 10) + "..."}
            </Link>
            {isVerified && (
              <img src={VerifiedIcon} width={20} alt="Verified_Icon" />
            )}
          </div>
          <Link
            to={`/${username}`}
            className="text-sm text-[#c0c0c0] font-medium tracking-wide whitespace-nowrap"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            @{username.length <= 11 ? username : username.slice(0, 11) + "..."}
          </Link>
        </div>
      </div>
      <button
        className="min-w-27 py-1.5 text-base text-white font-medium bg-[#192530] rounded-full cursor-pointer tracking-wide"
        onClick={() => RELATIONSHIP_STATUS === "unknown" && handleFollow(id)}
      >
        {RELATIONSHIP_STATUS === "unknown" && "Follow"}
        {RELATIONSHIP_STATUS === "followed" && "Unfollow"}
        {RELATIONSHIP_STATUS === "requested" && "Requested"}
      </button>
    </div>
  );
}

function Suggestions() {
  // States
  const [SUGGESTIONS, UPDATE_SUGGESTIONS] = useState([]);

  // Side-Effects
  useEffect(() => {
    const call = async () => {
      const result = await API("GET", "suggestions/foryou");
      UPDATE_SUGGESTIONS(result?.data);
    };

    call();
  }, []);
  return (
    <div className="hidden lg:flex max-w-[27%] w-full h-fit p-4 border-2 border-[#1E1E1E] rounded-3xl">
      <div className="w-full flex flex-col gap-6">
        <h2 className="text-lg font-semibold text-white">Discover People</h2>
        {SUGGESTIONS.map((suggestion) => {
          return (
            <Suggestion
              key={suggestion?._id}
              id={suggestion?._id}
              name={suggestion?.name}
              username={suggestion?.username}
              url={suggestion?.profilePictureUrl}
              isVerified={suggestion?.isVerified}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Suggestions;
