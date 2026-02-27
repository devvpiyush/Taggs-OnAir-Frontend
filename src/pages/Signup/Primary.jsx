// External Modules
import { useState } from "react";

// Local Modules
import { normalizeUsername } from "@hook/auth.hooks.js";
import { validateUsername } from "@/validators/auth.validator.js";
import { USERNAME_ERRORS } from "@/constants/Errors.js";
import { requestCanceler } from "@hook/auth.hooks.js";
import { checkUsernameAvailability } from "@hook/auth.hooks.js";

// Assets
import CheckIcon from "@icon/Check.svg";

function Primary() {
  // Declarations
  const { cancelRequest, createSignal } = requestCanceler();
  const [USERNAME, SET_USERNAME] = useState("");
  const [USERNAME_ERROR, SET_USERNAME_ERROR] = useState(null);
  const [USERNAME_STATUS, SET_USERNAME_STATUS] = useState({
    status: "IDLE", // IDLE | CHECKING | AVAILABLE | TAKEN | ERROR
    username: null,
  });

  function handleOnChange(value) {
    const normalized = normalizeUsername(value);
    SET_USERNAME(normalized);

    if (!normalized) {
      SET_USERNAME_ERROR(null);
      SET_USERNAME_STATUS({ status: "IDLE", username: null });
      return;
    }

    const error = validateUsername(normalized);
    SET_USERNAME_ERROR(error);

    if (error) {
      SET_USERNAME_STATUS({ status: "IDLE", username: null });
      return;
    }

    SET_USERNAME_STATUS({
      status: "CHECKING",
      username: normalized,
    });

    cancelRequest();

    checkUsernameAvailability({
      username: normalized,
      signal: createSignal(),
      onResult: (response) => {
        if (response.isSuccess) {
          SET_USERNAME_STATUS({
            status: "AVAILABLE",
            username: normalized,
          });
        } else {
          SET_USERNAME_STATUS({
            status: "TAKEN",
            username: normalized,
          });
        }
      },
    });
  }

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
          className={`px-4 flex flex-row items-center justify-between border ${USERNAME_STATUS.status === "AVAILABLE" && !USERNAME_ERROR && USERNAME.length > 0 ? "border-2 border-[#0A8754]" : "border-(--primary-border-color)"} rounded-full ${USERNAME_STATUS.status !== "AVAILABLE" ? "hover:border-(--primary-border-hover-color)" : ""}`}
        >
          <input
            type="text"
            value={USERNAME}
            minLength={3}
            maxLength={21}
            autoCapitalize="false"
            spellCheck="false"
            required
            className={`w-full px-2 py-3 outline-none text-white font-semibold tracking-wide rounded-full`}
            placeholder="Username"
            onChange={(e) => {
              handleOnChange(e.target.value);
            }}
          />
          {USERNAME_STATUS.status === "AVAILABLE" &&
            !USERNAME_ERROR &&
            USERNAME.length > 0 && (
              <img src={CheckIcon} alt="Check_Icon" width={20} height={20} />
            )}
        </div>
        {USERNAME_ERROR && (
          <p className="text-xs text-red-400 font-medium text-center">
            {USERNAME_ERRORS[USERNAME_ERROR]}
          </p>
        )}
        <p
          className={`${!USERNAME_ERROR ? "mt-4" : "mt-2"} text-xs font-medium text-[#c0c0c0] text-center`}
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
