// External Modules
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// Assets
import VerifiedIcon from "@icon/Verified.svg";
import OptionsIcon from "@icon/Options.svg";
import LikeIcon from "@icon/Like.svg";
import CommentsIcon from "@icon/Comments.svg";

function Thread({
  caption = "",
  createdAt = Date.now(),
  likesCount = 0,
  commentsCount = 0,
  creatorUsername = "",
  creatorName = "",
  creatorProfilePictureUrl = "https://res.cloudinary.com/dtgta9nbo/image/upload/v1775106730/No_Profile_Picture_Icon_Tiktok_snc7gr.jpg",
  isCreatorVerified = false,
}) {
  // Constants
  const creationAt = dayjs.extend(relativeTime);

  return (
    <div className="w-full border-2 border-[#1E1E1E] rounded-3xl">
      <div className="p-4 flex flex-row items-center justify-between border-b-2 border-[#1E1E1E] rounded-x-3xl">
        <div className="flex flex-row gap-4">
          <img
            src={creatorProfilePictureUrl}
            alt={`${creatorUsername}'s Profile Picture`}
            className="min-w-12 max-w-12 min-h-12 max-h-12 rounded-full object-cover object-center shadow-sm cursor-pointer"
          />
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <Link
                to={`/${creatorUsername}`}
                className="font-semibold text-white tracking-wide whitespace-nowrap"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {creatorName}
              </Link>
              {isCreatorVerified && <img src={VerifiedIcon} width={20} />}
            </div>
            <p className="text-[#c0c0c0] font-medium">
              {creationAt(createdAt).fromNow()}
            </p>
          </div>
        </div>
        <img
          src={OptionsIcon}
          alt="Options_Icon"
          width={30}
          className="cursor-pointer"
        />
      </div>
      <div className="md:pl-20 px-6 py-4">
        <p
          className="text-md md:text-lg text-[#c0c0c0] font-medium tracking-wider whitespace-pre-line"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {(caption.length > 450 && caption.slice(0, 450) + "...") || caption}
        </p>
      </div>
      <div className="w-full md:pl-14 flex flex-row items-center">
        <div className="px-2 py-2 rounded-x-3xl">
          <div className="px-4 py-2 w-fit flex flex-row items-center justify-center gap-3 transition-colors ease-in-out duration-200 hover:bg-[#232323] rounded-xl cursor-pointer">
            <img
              src={LikeIcon}
              alt="Like_Icon"
              width={30}
              className="cursor-pointer"
            />
            <p className="text-white font-semibold">{likesCount}</p>
          </div>
        </div>
        <div className="px-2 py-2 rounded-x-3xl">
          <div className="px-4 py-2 w-fit flex flex-row items-center justify-center gap-3 transition-colors ease-in-out duration-200 hover:bg-[#232323] rounded-xl cursor-pointer">
            <img
              src={CommentsIcon}
              alt="Comments_Icon"
              width={30}
              className="cursor-pointer"
            />
            <p className="text-white font-semibold">{commentsCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thread;
