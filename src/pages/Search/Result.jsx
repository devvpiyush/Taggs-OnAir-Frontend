// External Modules
import { Link } from "react-router-dom";

function Result({ username, name, isVerified, profilePictureUrl }) {
  return (
    <div className="w-full bg-blue-900/10 px-4 py-4 rounded-2xl md:rounded-2xl flex flex-row items-center justify-between">
      <div className="flex flex-row gap-2 md:gap-3">
        <img
          src={profilePictureUrl || https://res.cloudinary.com/dtgta9nbo/image/upload/q_auto/f_auto/v1775106730/No_Profile_Picture_Icon_Tiktok_snc7gr.jpg}
          alt={`${name}'s Profile Picture`}
          className="min-w-12 max-w-12 min-h-12 max-h-12 rounded-full object-cover object-center"
        />
        <div className="flex flex-col">
          <Link
            to={`/${username}`}
            className="font-semibold text-white tracking-wider"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {username}
          </Link>
          <p
            className="font-semibold text-gray-400 tracking-wide"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Result;
