// External Modules
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Local Modules
import api from "@util/api.util.js";
import { CircularCoolBlue } from "@component/Loaders";
import { onBoardActions } from "@/store/onBoard.js";
import { USERNAME_ERRORS } from "@/constants/Errors.js";

// Assets
import CheckIcon from "@icon/Check.svg";

function Primary() {
  // Declarations
  const dispatch = useDispatch();
  const onBoardData = useSelector((store) => store.onBoard);

  // Constants, States & References
  const [USERNAME, SET_USERNAME] = useState("");
  const [USERNAME_STATUS, SET_USERNAME_STATUS] = useState({
    isChecking: false,
    isAvailable: false,
    anyError: "",
    username: "",
  });

  async function checkAvailability() {
    try {
      SET_USERNAME_STATUS((prev) => ({
        ...prev,
        anyError: "",
        isChecking: true,
      }));

      const res = await api("POST", "check/username", true, {
        username: USERNAME,
      });

      const metaUsername = res?.meta?.username || USERNAME;

      if (res?.isSuccess && res?.code === "USERNAME_AVAILABLE") {
        SET_USERNAME(metaUsername);
        SET_USERNAME_STATUS((prev) => ({
          ...prev,
          isAvailable: true,
          username: metaUsername,
        }));
        return;
      }

      SET_USERNAME(metaUsername);
      SET_USERNAME_STATUS((prev) => ({
        ...prev,
        isAvailable: false,
        username: metaUsername,
        anyError: USERNAME_ERRORS[res?.code] || "Something, went wrong!",
      }));
    } catch (err) {
      console.log(`Error for Signup (Primary): ${err}`);
      SET_USERNAME_STATUS((prev) => ({
        ...prev,
        anyError: err?.message || "Something, went wrong!",
      }));
    } finally {
      SET_USERNAME_STATUS((prev) => ({ ...prev, isChecking: false }));
    }
  }

  async function submitUsername() {
    try {
      const res = await api("POST", "auth/temp/create", true, {
        username: USERNAME,
      });
      if (res?.isSuccess && res?.code === "TEMPORARY_USER_CREATED") {
        dispatch(onBoardActions.setUser({ username: res?.meta?.username }));
        return;
      }
    } catch (err) {
      console.log(
        `Error for Signup (Primary): ${err?.message || "Something, went wrong!"}`,
      );
    }
  }

  useEffect(() => {
    if (onBoardData?.username !== "") {
      SET_USERNAME(onBoardData.username);
    }
  }, [onBoardData?.username]);

  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="w-full flex flex-col gap-2">
        <span
          className="ml-4 font-medium text-white tracking-wide"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Choose a Username
        </span>
        <div
          className={`px-4 flex flex-row items-center justify-between border-2 ${USERNAME_STATUS?.isAvailable && USERNAME_STATUS?.username === USERNAME ? "border-[#0A8754]" : "border-(--primary-border-color) hover:border-(--primary-border-hover-color)"} rounded-full`}
        >
          <input
            type="text"
            placeholder="Username"
            required
            minLength={3}
            maxLength={21}
            autoCapitalize="none"
            spellCheck="false"
            value={USERNAME}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                checkAvailability();
              }
            }}
            onChange={(e) => {
              SET_USERNAME_STATUS((prev) => ({
                ...prev,
                isAvailable: false,
                anyError: "",
              }));
              SET_USERNAME(e.target.value.toLowerCase());
            }}
            className={`w-full px-2 py-3 outline-none text-white font-semibold tracking-wide rounded-full`}
          />
          {USERNAME_STATUS?.isChecking && <CircularCoolBlue />}
          {USERNAME_STATUS?.isAvailable &&
          USERNAME_STATUS?.username === USERNAME ? (
            <img src={CheckIcon} alt="Check_Icon" width={20} height={20} />
          ) : null}
        </div>
        {USERNAME_STATUS?.anyError !== "" &&
        USERNAME_STATUS?.username === USERNAME ? (
          <p
            className="text-sm text-red-500 text-center"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            * {USERNAME_STATUS?.anyError}
          </p>
        ) : null}
        <p
          className={`mt-2 px-2 sm:px-0 text-xs font-medium text-[#c0c0c0] text-center`}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Pick a unique username that represents you. Letters, numbers, periods
          and underscores are allowed. This username will be public.
        </p>
      </div>
      <div className="w-full flex flex-col gap-5">
        <button
          type="submit"
          className="w-full py-3 bg-[#181818] border border-[#0353a4] text-white font-medium rounded-full cursor-pointer tracking-wider"
          style={{ fontFamily: "Poppins, sans-serif" }}
          onClick={() => {
            if (!USERNAME_STATUS?.isAvailable) {
              checkAvailability();
            } else {
              submitUsername();
            }
          }}
        >
          {!USERNAME_STATUS?.isAvailable ? "Check Availability" : "Continue"}
        </button>
        <button
          type="button"
          className="w-full py-3 bg-[#181818] border border-(--primary-border-color) text-white font-medium rounded-full cursor-pointer tracking-wide"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Already have an account?
        </button>
      </div>
    </div>
  );
}

export default Primary;
