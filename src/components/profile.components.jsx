// External Modules
import Skeleton from "@mui/material/Skeleton";

export function SkeleWithUserPicture({
  // Meta Data
  isLoading = false,
  isForProfile = false,

  // User Info / User Data
  url = "https://res.cloudinary.com/dtgta9nbo/image/upload/v1775106730 No_Profile_Picture_Icon_Tiktok_snc7gr.jpg",
  name = "User",

  // Tailwind Styles
  minTailWidth = "min-w-10",
  maxTailWidth = "max-w-10",
  minTailHeight = "min-h-10",
  maxTailHeight = "max-h-10",
}) {
  return isLoading ? (
    <Skeleton
      variant="circular"
      width={minTailWidth.split("-")[2]}
      height={minTailHeight.split("-")[2]}
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
      src={url}
      alt={`${name}'s Profile Picture`}
      className={`${minTailWidth} ${maxTailWidth} ${minTailHeight} ${maxTailHeight} rounded-full object-cover object-center cursor-pointer ${!isForProfile ? "shadow-sm" : "p-1 border-2 border-blue-900/30"}`}
    />
  );
}
