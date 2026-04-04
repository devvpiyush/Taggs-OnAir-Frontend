// External Modules
import { Link, useOutletContext } from "react-router-dom";
import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";

// Local Modules
import api from "@util/api.util";

// Assets
import VerifiedIcon from "@icon/Verified.svg";
import WarningIcon from "@icon/Warning.svg";
import SendIcon from "@icon/Send.svg";
import { decodeErrorCode } from "@util/decoders";

function Create({ toggle }) {
  // Constants
  const { me } = useOutletContext();

  // States
  const [CAPTION, SET_CAPTION] = useState("");
  const [POST_ERROR, SET_POST_ERROR] = useState(null);

  // Functions
  async function onSubmit() {
    if (CAPTION === "") return SET_POST_ERROR("Caption is Required.");

    SET_POST_ERROR(null);
    toggle(false);
    try {
      const res = await api("POST", "post/new/create", true, {
        caption: CAPTION,
      });
      if (res?.isSuccess) {
        toggle(true);
        return SET_CAPTION("");
      }
    } catch (err) {
      SET_POST_ERROR(decodeErrorCode(err?.code));
    }
  }
  return (
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
            src={
              me?.data?.profilePictureUrl ||
              "https://res.cloudinary.com/dtgta9nbo/image/upload/q_auto/f_auto/v1775106730/No_Profile_Picture_Icon_Tiktok_snc7gr.jpg"
            }
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
            <div className="flex flex-row gap-2">
              <Link
                to={`/${me?.data?.username}`}
                className="font-semibold text-white tracking-wide whitespace-nowrap"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {me?.data?.name}
              </Link>
              {me?.data?.isVerified && (
                <img src={VerifiedIcon} width={20} alt="Verified_Icon" />
              )}
            </div>
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
              <img
                src={WarningIcon}
                alt="Warning_Icon"
                className="min-w-5 max-w-5 min-h-5 max-h-5"
              />
              <p
                className="text-sm md:text-md text-red-600 text-center font-medium"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {POST_ERROR}
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
              <img src={SendIcon} alt="Send_Icon" className="min-w-6 max-w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
