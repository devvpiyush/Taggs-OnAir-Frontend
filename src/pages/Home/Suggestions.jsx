// External Modules
import { Link, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";

// Local Modules
import API from "@util/api.util.js";

// Assets
import VerifiedIcon from "@icon/Verified.svg";

function Suggestion({ name, username, isVerified, url }) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex gap-2">
        <img
          src={url}
          alt={`${name}'s Profile Picture`}
          className="min-w-10 max-w-10 min-h-10 max-h-10 rounded-full object-cover object-center shadow-sm cursor-pointer"
        />
        <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            <Link
              to={`/${username}`}
              className="text-sm text-white font-medium tracking-wide whitespace-nowrap"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {name}
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
            @{username}
          </Link>
        </div>
      </div>
      <button className="px-4 py-1.5 text-base text-white font-normal bg-[#192530] rounded-full cursor-pointer tracking-wide">
        Follow
      </button>
    </div>
  );
}

function Suggestions() {
  // States
  const [SUGGESTIONS, UPDATE_SUGGESTIONS] = useState([]);
  useEffect(() => {
    const call = async () => {
      const result = await API("GET", "connect/suggestions");
      UPDATE_SUGGESTIONS(result?.data);
    };

    call();
  }, []);
  return (
    <div className="hidden lg:flex max-w-[27%] w-full h-fit p-4 border-2 border-[#1E1E1E] rounded-3xl">
      <div className="w-full flex flex-col gap-6">
        <h2 className="text-lg font-semibold text-white">Just, for you</h2>
        {SUGGESTIONS.map((suggestion) => {
          return (
            <Suggestion
              key={suggestion?._id}
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
