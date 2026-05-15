// External Modules
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full sticky top-0 flex flex-row items-center justify-between py-3 md:py-6 px-4 md:px-8 border-b border-[#232323]">
      <div className="flex flex-row items-start gap-4">
        <img
          src="https://res.cloudinary.com/dtgta9nbo/image/upload/v1775106730/No_Profile_Picture_Icon_Tiktok_snc7gr.jpg"
          className="min-w-12 max-w-12 min-h-12 max-h-12 rounded-full"
          alt=""
        />
        <div className="flex flex-col">
          <Link
            to={"/nancy_choudhary"}
            className="text-md text-white font-medium tracking-wide"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Nancy Choudhary
          </Link>
          <span
            className="text-sm text-gray-500 font-semibold"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            @nancy_choudhary
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
