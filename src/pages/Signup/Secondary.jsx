// External Modules
import { useState } from "react";

// Local Modules
import { fireApi } from "@util/api.util.js";
import { EMAIL_ERRORS } from "@/constants/Errors.js";
import { MidnightEdge } from "@component/Buttons";
import { CircularCoolBlue } from "@component/Loaders";

function Secondary({ changeStage }) {
  // Constants, States & References
  const [EMAIL, UPDATE_EMAIL] = useState("");
  const [EMAIL_ERROR, SET_EMAIL_ERROR] = useState("");
  const [EMAIL_STATUS, SET_EMAIL_STATUS] = useState({
    username: null,
    status: null, // CHECKING | OTP_SENT | VERIFIED
  });

  // Functions
  function handleSubmit() {
    if (!EMAIL) {
      SET_EMAIL_ERROR(EMAIL_ERRORS["EMAIL_REQUIRED"]);
      return;
    }

    try {
      const handle = async () => {
        SET_EMAIL_STATUS({ email: EMAIL, status: "CHECKING" });
        const response = await fireApi("POST", "check/email", false, {
          email: EMAIL,
        });

        SET_EMAIL_ERROR(EMAIL_ERRORS[response?.code]);
        SET_EMAIL_STATUS({ email: EMAIL, status: null });
        UPDATE_EMAIL(response?.meta?.email);
      };

      handle();
    } catch (error) {
      console.log(error);
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
            value={EMAIL}
            minLength={5}
            maxLength={254}
            autoCapitalize="false"
            autoComplete="false"
            required
            placeholder="Email"
            className={`w-full px-2 py-3 outline-none text-white font-semibold tracking-wide rounded-full`}
            onChange={(e) => {
              SET_EMAIL_ERROR(null);
              SET_EMAIL_STATUS({ username: null, status: null });
              UPDATE_EMAIL(e.target.value.toLowerCase());
            }}
          />
          {EMAIL_STATUS?.status === "CHECKING" && <CircularCoolBlue />}
        </div>
        {EMAIL_ERROR && (
          <p
            className="text-sm text-red-500 text-center"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            * {EMAIL_ERROR}
          </p>
        )}
        <p
          className={`${EMAIL_ERROR ? "mt-2" : "mt-4"} px-2 sm:px-0 text-xs font-medium text-[#c0c0c0] text-center`}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          We use your email only to keep your account secure and up to date. It
          is private and never shown publicly. Only Gmail • Hotmail • iCloud are
          Supported.
        </p>
      </div>
      <div className="w-full flex flex-col gap-5">
        <MidnightEdge
          text={EMAIL_STATUS?.status === "VERIFIED" ? "Continue" : "Verify"}
          onClickFn={
            EMAIL_STATUS?.status === "VERIFIED" ? changeStage : handleSubmit
          }
        />
      </div>
    </div>
  );
}

export default Secondary;
