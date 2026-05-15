// External Modules
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";

// Local Modules
import API from "@util/api.util.js";
import { Head } from "@component/Brand";
import Classic from "@/layouts/Classic";

// Assets
import VerifiedIcon from "@icon/Verified.svg";

function Profile() {
  // Constants
  const param = useParams().username;

  // States
  const [PROFILE, SET_PROFILE] = useState(null);

  // Side-Effects
  useEffect(() => {
    const call = async () => {
      const res = await API("GET", `user/id/${param}`);
      if (res?.isSuccess) SET_PROFILE(res?.meta?.data);
    };
    if (param && param !== "") call();
  }, [param]);

  return (
    <Classic>
      <Head />
      <div className="p-4 md:p-8">
        <div className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-0 justify-between border-2 border-blue-900/20 rounded-3xl">
          <div className="flex flex-row gap-6">
            <img
              src={PROFILE?.profilePictureUrl}
              alt="Profile-Picture"
              className="min-w-25 max-w-25 min-h-25 max-h-25 rounded-full object-cover object-center cursor-pointer p-1 border-2 border-blue-900/30"
            />
            <div className="pt-2 flex flex-col gap-1">
              <div className="flex flex-row gap-2">
                <h1
                  className="text-white font-semibold tracking-wider"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {PROFILE?.name || ""}
                </h1>
                {PROFILE?.isVerified && (
                  <img src={VerifiedIcon} width={20} alt="Verified_Icon" />
                )}
              </div>
              <span
                className="text-sm text-white font-medium tracking-wider"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                @{PROFILE?.username || ""}
              </span>
              {PROFILE?.identity && PROFILE?.identity !== "normal" ? (
                <h1
                  className="text-xs text-gray-300 font-medium tracking-wider"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {PROFILE?.identity.charAt(0).toUpperCase() +
                    PROFILE?.identity.slice(1)}
                </h1>
              ) : (
                ""
              )}
              <p
                className="text-sm text-white font-medium tracking-wider"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {PROFILE?.bio || ""}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between gap-2">
              <button className="w-full px-8 py-2 border md:border-2 border-blue-600/20 text-gray-400 font-medium rounded-full cursor-pointer whitespace-nowrap">
                {PROFILE?.followersCount || 0} Followers
              </button>
              <button className="w-full px-8 py-2 border md:border-2 border-blue-600/20 text-gray-400 font-medium rounded-full cursor-pointer whitespace-nowrap">
                {PROFILE?.followingCount || 0} Following
              </button>
            </div>
            <div className="flex flex-row justify-between gap-2">
              <button className="w-full px-3 py-2 border md:border-2 border-blue-600/20 text-gray-400 font-medium rounded-full cursor-pointer whitespace-nowrap">
                {PROFILE?.postsCount || 0} Posts
              </button>
              <button className="w-full px-3 py-2 border md:border-2 border-blue-600/20 text-gray-400 font-medium rounded-full cursor-pointer whitespace-nowrap">
                {PROFILE?.threadsCount || 0} Threads
              </button>
            </div>
          </div>
        </div>
      </div>
    </Classic>
  );
}

export default Profile;
