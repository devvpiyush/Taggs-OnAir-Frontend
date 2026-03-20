// External Modules
import { Link, useOutletContext } from "react-router-dom";

// Assets
import SendIcon from "@icon/Send.svg";
import ImageIcon from "@icon/Image.svg";

function Create() {
  // Constants
  const { User } = useOutletContext();
  return (
    <div className="w-full p-4">
      <div className="p-4 border-2 border-[#1E1E1E] rounded-3xl transition-color ease-in-out duration-300 hover:border-(--primary-border-hover-color)">
        <div className="flex flex-row items-start justify-between gap-4">
          <img
            src={
              User?.profilePictureUrl ||
              "https://res.cloudinary.com/dtgta9nbo/image/upload/f_auto,q_auto/v1773724571/f9b2236d-f8cd-46d6-a48d-c978d1ddf0dc.png"
            }
            alt="User_Profile_Picture"
            className="min-w-12 max-w-12 min-h-12 max-h-12 rounded-full object-cover object-center shadow-sm cursor-pointer"
          />
          <div className="w-full flex flex-col items-start justify-center">
            <Link
              to={`/${User?.username}`}
              className="font-semibold text-white tracking-wide"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {User?.name}
            </Link>
            <textarea
              required
              name="content"
              aria-expanded="false"
              placeholder="What's Happening?"
              className="w-full min-h-25 sm:min-h-20 max-h-25 sm:max-h-20 text-[#c0c0c0] font-light outline-0 tracking-wider resize-none"
              style={{ fontFamily: "Poppins, sans-serif" }}
            ></textarea>
            <div className="w-full flex flex-row items-center justify-between">
              <div className="w-full flex flex-row items-center gap-6 sm:gap-12">
                <img
                  src={ImageIcon}
                  alt="Image_Upload_Icon"
                  className="cursor-pointer"
                  width={20}
                  height={20}
                />
              </div>
              <button
                type="submit"
                className="p-2 border border-(--primary-border-color) rounded-full cursor-pointer"
              >
                <img
                  src={SendIcon}
                  alt="Send_Icon"
                  className="min-w-6 max-w-6"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
