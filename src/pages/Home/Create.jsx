// External Modules
import { Link, useOutletContext } from "react-router-dom";
import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";

// Local Modules
import api from "@util/api.util";

// Assets
import Warning from "@icon/Warning.svg";
import Send from "@icon/Send.svg";

function Create() {
  // Constants
  const { me } = useOutletContext();

  // States
  const [CAPTION, SET_CAPTION] = useState("");
  const [POST_ERROR, SET_POST_ERROR] = useState();

  // Functions
  async function onSubmit() {
    if (!CAPTION || CAPTION === "")
      return SET_POST_ERROR("Caption is Required.");

    try {
      const res = api("POST", "post/new/create");
      console.log(res);
    } catch (err) {
      console.log(err);
      SET_POST_ERROR(err);
    }
  }
  return (
    <div className="w-full p-4">
      <div className="p-4 border-2 border-[#1E1E1E] rounded-3xl transition-color ease-in-out duration-300 hover:border-(--primary-border-hover-color)">
        <div className="flex flex-row items-start justify-between gap-4">
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
            <img
              src={me?.data?.profilePictureUrl}
              alt="User_Profile_Picture"
              className="min-w-12 max-w-12 min-h-12 max-h-12 rounded-full object-cover object-center shadow-sm cursor-pointer"
            />
          )}
          <div className="w-full flex flex-col items-start justify-center">
            {me?.isLoading ? (
              <Skeleton
                variant="text"
                animation="wave"
                width={"21ch"}
                height={30}
                sx={{
                  bgcolor: "#1a1a1a",
                  "::after": {
                    background:
                      "linear-gradient(90deg, transparent, #2a2a2a, transparent)",
                  },
                }}
              />
            ) : (
              <Link
                to={`/${me?.data?.username}`}
                className="font-semibold text-white tracking-wide"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {me?.data?.name}
              </Link>
            )}
            <textarea
              required
              value={CAPTION}
              aria-expanded="false"
              placeholder="What's on your mind?"
              className="w-full min-h-25 sm:min-h-20 max-h-25 sm:max-h-20 text-[#c0c0c0] font-light outline-0 tracking-wider resize-none"
              style={{ fontFamily: "Poppins, sans-serif" }}
              onChange={(e) => {
                SET_POST_ERROR(null);
                SET_CAPTION(e.target.value);
              }}
            ></textarea>
            {POST_ERROR && (
              <div className="w-full flex flex-row items-start justify-start gap-2">
                <img src={Warning} alt="Warning_Icon" width={21} height={21} />
                <p
                  className="text-md text-red-600 text-center font-medium"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Caption is Required.
                </p>
              </div>
            )}
            <div className="w-full flex flex-row items-center justify-between">
              <div className="w-full flex flex-row items-center gap-6 sm:gap-12"></div>
              <button
                type="submit"
                className="p-2 border border-(--primary-border-color) rounded-full cursor-pointer"
                onClick={onSubmit}
              >
                <img src={Send} alt="Send_Icon" className="min-w-6 max-w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
