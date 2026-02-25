// External Modules
import { useRef, useState } from "react";

// Local Modules
import { callApi, debounce } from "@util/api.js";

// Assets
import CheckIcon from "@icon/Check.svg";

function Primary() {
  // Declarations
  const [USERNAME_AVAILABLE, SET_USERNAME_AVAILABLE] = useState({
    username: null,
    isAvailable: false,
  });

  const checkUsernameAvailability = useRef(
    debounce(async (username) => {
      if (!username) return;

      try {
        const response = await callApi(
          "POST",
          "auth/check/username/availability",
          false,
          { username },
        );

        if (response.isSuccess) {
          SET_USERNAME_AVAILABLE({ username, isAvailable: true });
        } else {
          SET_USERNAME_AVAILABLE({ username, isAvailable: false });
        }
      } catch (error) {
        console.log(error);
      }
    }, 300),
  ).current;

  return (
    <>
      <div className="w-full flex flex-col gap-2">
        <span
          className="ml-4 font-medium text-white tracking-wide"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Choose a Username
        </span>
        <div
          className={`px-4 flex flex-row items-center justify-between border ${USERNAME_AVAILABLE.isAvailable ? "border-2 border-[#0A8754]" : "border-(--primary-border-color)"} rounded-full ${!USERNAME_AVAILABLE.isAvailable && "hover:border-(--primary-border-hover-color)"}`}
        >
          <input
            type="text"
            minLength={3}
            maxLength={21}
            required
            className={`w-full px-2 py-3 outline-none text-white font-semibold tracking-wide rounded-full`}
            placeholder="Username"
            onChange={(e) => {
              SET_USERNAME_AVAILABLE({
                username: e.target.value,
                isAvailable: false,
              });
              checkUsernameAvailability(e.target.value);
            }}
          />
          {USERNAME_AVAILABLE.isAvailable && (
            <img src={CheckIcon} alt="Check_Icon" width={20} height={20} />
          )}
        </div>
        <p
          className="py-4 text-xs font-medium text-[#c0c0c0] text-center"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Pick a unique username that represents you. Letters, numbers, periods
          and underscores are allowed. This username will be public.
        </p>
      </div>
    </>
  );
}

export default Primary;
