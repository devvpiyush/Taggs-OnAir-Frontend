// External Modules
import { Link } from "react-router-dom";

// Local Modules
import { useMe } from "@hook/Auth";

// Assets
import SendIcon from "@icon/Send.svg";

function Create() {
  // Constants
  const { data } = useMe();
  return (
    <div className="w-full p-4">
      <div className="p-4 border-2 border-[#1E1E1E] rounded-3xl transition-color ease-in-out duration-300 hover:border-(--primary-border-hover-color)">
        <div className="flex flex-row items-start justify-between gap-4">
          <img
            src={
              data?.profilePictureUrl ||
              "https://res.cloudinary.com/dtgta9nbo/image/upload/f_auto,q_auto/v1773724571/f9b2236d-f8cd-46d6-a48d-c978d1ddf0dc.png"
            }
            alt="User_Profile_Picture"
            className="min-w-12 max-w-12 min-h-12 max-h-12 rounded-full object-cover object-center shadow-sm cursor-pointer"
          />
          <div className="w-full flex flex-col items-start justify-center">
            <Link
              to={`/${data?.username}`}
              className="font-semibold text-white tracking-wide"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {data?.name}
            </Link>
            <textarea
              required
              name="content"
              aria-expanded="false"
              placeholder="What's Happening?"
              className="w-full min-h-30 sm:min-h-25 max-h-30 sm:max-h-25 text-[#c0c0c0] font-light outline-0 tracking-wider resize-none"
              style={{ fontFamily: "Poppins, sans-serif" }}
            ></textarea>
          </div>
          <div className="self-end">
            <button
              type="submit"
              className="p-2 border border-(--primary-border-color) rounded-full cursor-pointer"
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
