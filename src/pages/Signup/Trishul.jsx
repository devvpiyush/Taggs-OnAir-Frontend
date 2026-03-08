// External Modules
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

// Local Modules
import api from "@util/api.util.js";
import { CircularCoolBlue } from "@component/Loaders";
import { OTP_ERRORS } from "../../constants/Errors";
import { onBoardActions } from "@/store/onBoard.js";

function Trishul() {
  // Declarations
  const dispatch = useDispatch();

  //   Constants, States & References
  const OTP_LENGTH = 4;
  const inputRefs = useRef([]);
  const [OTP, SET_OTP] = useState(new Array(OTP_LENGTH).fill(""));
  const [OTP_STATUS, SET_OTP_STATUS] = useState({
    isVerifing: false,
    isSuccess: false,
    error: "",
    otp: "",
  });

  function handleChange(value, index) {
    SET_OTP_STATUS((prev) => ({
      ...prev,
      error: null,
      isSuccess: false,
    }));
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...OTP];
    newOtp[index] = value;
    SET_OTP(newOtp);

    // Move to next input
    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1].focus();
    }

    async function connectToBackend(otp) {
      SET_OTP_STATUS((prev) => ({ ...prev, isVerifing: true }));
      try {
        const res = await api("POST", "auth/temp/verify/email", true, {
          otp,
        });

        if (res?.isSuccess && res?.code === "OTP_VERIFIED") {
          SET_OTP_STATUS((prev) => ({
            ...prev,
            isSuccess: true,
          }));
          dispatch(onBoardActions.setUser({ isEmailVerified: true }));
          return;
        }

        SET_OTP_STATUS({
          error: OTP_ERRORS[res?.code] || "Something, went wrong!",
        });
      } catch (err) {
        console.log(
          `Error for Signup (Trishult): ${err?.message || "Something, went wrong!"}`,
        );
      } finally {
        SET_OTP_STATUS((prev) => ({ ...prev, isVerifing: false }));
      }
    }

    // If last input filled
    if (index === OTP_LENGTH - 1 && value) {
      connectToBackend(newOtp.join(""));
    }
  }

  function handlePaste(e) {
    const paste = e.clipboardData.getData("text").slice(0, OTP_LENGTH);

    if (!/^\d+$/.test(paste)) return;

    const newOtp = paste.split("");
    SET_OTP(newOtp);

    newOtp.forEach((digit, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = digit;
      }
    });
  }

  function handleKeyDown(e, index) {
    if (e.key === "Backspace" && !OTP[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  }
  return (
    <div className="h-full flex flex-col self-start gap-4">
      <div className="flex gap-3 justify-center">
        {OTP.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            autoComplete="off"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            className="w-16 h-16 text-center text-2xl font-semibold text-white outline-none border-2 border-(--primary-border-color) rounded-lg"
          />
        ))}
      </div>
      <div className="w-full flex flex-col gap-2">
        {OTP_STATUS?.isVerifing && (
          <div className="w-full flex items-center justify-center">
            <CircularCoolBlue />
          </div>
        )}
        {OTP_STATUS?.error ? (
          <p
            className="text-sm text-red-500 text-center"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {OTP_STATUS?.error}
          </p>
        ) : null}
        <p
          className={`mt-2 px-2 sm:px-0 text-xs font-medium text-[#c0c0c0] text-center`}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Please enter the one-time password (OTP) your email. This OTP is
          confidential and should never be shared with anyone for your account’s
          safety.
        </p>
      </div>
    </div>
  );
}

export default Trishul;
