// External Modules
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// Assets
import VerifiedIcon from "@icon/Verified.svg";
import OptionsIcon from "@icon/Options.svg";
import LikeIcon from "@icon/Like.svg";

function Thread({ post, user, action }) {
  // Constants
  const createdAt = dayjs.extend(relativeTime);

  return (
    <div className="w-full border-2 border-[#1E1E1E] rounded-3xl">
      <div>
        <div className="p-4 flex flex-row items-center justify-between border-b-2 border-[#1E1E1E] rounded-x-3xl">
          <div className="flex flex-row gap-4">
            <img
              src={user?.profilePictureUrl}
              alt={`${user?.username}'s Profile Picture`}
              className="min-w-12 max-w-12 min-h-12 max-h-12 rounded-full object-cover object-center shadow-sm cursor-pointer"
            />
            <div className="flex flex-col">
              <div className="flex flex-row gap-2">
                <Link
                  to={`/${user?.username}`}
                  className="font-semibold text-white tracking-wide whitespace-nowrap"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {user?.name}
                </Link>
                {user?.isVerified && <img src={VerifiedIcon} width={20} />}
              </div>
              <p className="text-[#c0c0c0] font-medium">
                {createdAt(post?.createdAt).fromNow()}
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
      </div>
      <div className="md:pl-20 px-6 py-4">
        <p
          className="text-md md:text-lg text-[#c0c0c0] font-medium tracking-wider"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {(post?.caption.length > 450 &&
            post?.caption.slice(0, 450) + "...") ||
            post?.caption}
        </p>
      </div>
      <div className="px-2 py-2 md:pl-18 rounded-x-3xl">
        <div
          className="px-4 py-2 w-fit flex flex-row items-center justify-center gap-3 transition-colors ease-in-out duration-200 hover:bg-[#232323] rounded-xl cursor-pointer"
          onClick={() => {
            action("LIKE", post?._id);
          }}
        >
          <img
            src={LikeIcon}
            alt="Like_Icon"
            width={30}
            className="cursor-pointer"
          />
          <p className="text-white font-semibold">{post?.likesCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Thread;
