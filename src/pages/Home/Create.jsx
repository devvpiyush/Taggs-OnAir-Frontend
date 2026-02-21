// Assets
import ProfilePicture from "/Avatar.png";
import SendIcon from "@icon/Send.svg";

function Create() {
  return (
    <div className="w-full p-4">
      <div className="p-4 border-2 border-[#1E1E1E] rounded-3xl transition-color ease-in-out duration-300 hover:border-(--primary-border-hover-color)">
        <div className="flex flex-row items-start justify-between gap-4">
          <img
            src={ProfilePicture}
            alt="User_Profile_Picture"
            width={60}
            height={60}
            className="border border-[#0F172A] rounded-full cursor-pointer"
          />
          <div className="w-full flex flex-col items-start justify-center">
            <a
              href=""
              className="font-semibold text-white tracking-wide"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Sonam Wangchuck
            </a>
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
