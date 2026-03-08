// External Modules
import { useState } from "react";
import { useDispatch } from "react-redux";

// Local Modules
import { CircularCoolBlue } from "@component/Loaders";
import { onBoardActions } from "@/store/onBoard.js";
import { EMAIL_ERRORS } from "@/constants/Errors.js";
import api from "@util/api.util.js";

function Secondary() {
  // Declarations
  const dispatch = useDispatch();

  // Constants, States & References
  const [EMAIL, SET_EMAIL] = useState("");
  const [EMAIL_STATUS, SET_EMAIL_STATUS] = useState({
    isSending: false,
    isAvailable: false,
    anyError: "",
    email: "",
  });

  async function submitEmail() {
    try {
      SET_EMAIL_STATUS((prev) => ({
        ...prev,
        anyError: "",
        isSending: true,
      }));

      const res = await api("POST", "auth/temp/email", true, { email: EMAIL });

      const metaEmail = res?.meta?.email || EMAIL;

      if (res?.isSuccess && res?.code === "OTP_SENT") {
        SET_EMAIL(metaEmail);
        SET_EMAIL_STATUS((prev) => ({
          ...prev,
          isAvailable: true,
          email: metaEmail,
        }));
        dispatch(
          onBoardActions.setUser({ email: metaEmail, emailOtpSent: true }),
        );
        return;
      }

      SET_EMAIL(metaEmail);
      SET_EMAIL_STATUS((prev) => ({
        ...prev,
        isAvailable: false,
        email: metaEmail,
        anyError: EMAIL_ERRORS[res?.code] || "Something, went wrong!",
      }));
    } catch (err) {
      SET_EMAIL_STATUS((prev) => ({
        ...prev,
        anyError: EMAIL_ERRORS[err?.code] || "Something, went wrong!",
      }));
      console.log(
        `Error for Signup (Secondary): ${err?.message || "Something, went wrong!"}`,
      );
    } finally {
      SET_EMAIL_STATUS((prev) => ({ ...prev, isSending: false }));
    }
  }

  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="w-full flex flex-col gap-2">
        <span
          className="ml-4 font-medium text-white tracking-wide"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Enter your email
        </span>
        <div
          className={`px-4 flex flex-row items-center justify-between border border-(--primary-border-color) hover:border-(--primary-border-hover-color)"} rounded-full`}
        >
          <input
            type="email"
            placeholder="Email"
            required
            minLength={5}
            maxLength={254}
            autoCapitalize="false"
            autoComplete="false"
            value={EMAIL}
            onChange={(e) => {
              SET_EMAIL(e.target.value);
            }}
            className={`w-full px-2 py-3 outline-none text-white font-semibold tracking-wide rounded-full`}
          />
          {EMAIL_STATUS?.isSending && <CircularCoolBlue />}
        </div>
        {EMAIL_STATUS?.anyError !== "" && EMAIL_STATUS?.email === EMAIL ? (
          <p
            className="text-sm text-red-500 text-center"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            * {EMAIL_STATUS?.anyError}
          </p>
        ) : null}
        <p
          className={`mt-2 px-2 sm:px-0 text-xs font-medium text-[#c0c0c0] text-center`}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          We use your email only to keep your account secure and up to date. It
          is private and never shown publicly. Only Gmail • Hotmail • iCloud are
          Supported.
        </p>
      </div>
      <div className="w-full flex flex-col gap-5">
        <button
          type="submit"
          className="w-full py-3 bg-[#181818] border border-[#0353a4] text-white font-medium rounded-full cursor-pointer tracking-wider"
          style={{ fontFamily: "Poppins, sans-serif" }}
          onClick={() => {
            submitEmail();
          }}
        >
          Get OTP
        </button>
      </div>
    </div>
  );
}

export default Secondary;
