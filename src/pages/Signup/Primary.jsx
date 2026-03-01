// External Modules
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Local Modules
import { fireApi } from "@util/api.util.js";
import { USERNAME_ERRORS } from "@/constants/Errors.js";
import { MidnightEdge, Zebra } from "@component/Buttons";
import { CircularCoolBlue } from "@component/Loaders";

// Assets
import CheckIcon from "@icon/Check.svg";

function Primary({ changeStage }) {
  // Declarations
  const navigate = useNavigate();

  // Constants, States & References
  const [USERNAME, UPDATE_USERNAME] = useState("");
  const [USERNAME_ERROR, SET_USERNAME_ERROR] = useState("");
  const [USERNAME_STATUS, SET_USERNAME_STATUS] = useState({
    username: null,
    status: null, // AVAILABLE | CHECKING | TAKEN
  });

  // Functions
  function handleSubmit() {
    if (!USERNAME) {
      SET_USERNAME_ERROR(USERNAME_ERRORS["USERNAME_REQUIRED"]);
      return;
    }

    try {
      const handle = async () => {
        SET_USERNAME_STATUS({ username: USERNAME, status: "CHECKING" });
        const response = await fireApi("POST", "check/username", false, {
          username: USERNAME,
        });

        if (
          response?.isSuccess &&
          response?.signal === "GREEN" &&
          response?.code === "USERNAME_AVAILABLE" &&
          response?.meta?.username === USERNAME
        ) {
          SET_USERNAME_STATUS({ username: USERNAME, status: "AVAILABLE" });
          UPDATE_USERNAME(response?.meta?.username);
          return;
        }

        SET_USERNAME_ERROR(USERNAME_ERRORS[response.code]);
        UPDATE_USERNAME(response?.meta?.username);
        SET_USERNAME_STATUS({ username: USERNAME, status: null });
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
          Choose a Username
        </span>
        <div
          className={`px-4 flex flex-row items-center justify-between ${USERNAME_STATUS?.status === "AVAILABLE" && !USERNAME_ERROR ? "border-2 border-[#0A8754]" : "border border-(--primary-border-color) hover:border-(--primary-border-hover-color)"} rounded-full`}
        >
          <input
            type="text"
            value={USERNAME}
            minLength={3}
            maxLength={21}
            autoCapitalize="false"
            spellCheck="false"
            required
            pattern={/^[a-z0-9._]+$/}
            placeholder="Username"
            className={`w-full px-2 py-3 outline-none text-white font-semibold tracking-wide rounded-full`}
            onChange={(e) => {
              SET_USERNAME_ERROR(null);
              SET_USERNAME_STATUS({ username: null, status: null });
              UPDATE_USERNAME(e.target.value.toLowerCase());
            }}
            onKeyDown={(e) => {
              if (e.code === "Enter" || e.code === "ENTER") {
                handleSubmit();
              }
            }}
          />
          {USERNAME_STATUS?.status === "AVAILABLE" && !USERNAME_ERROR ? (
            <img src={CheckIcon} alt="Check_Icon" width={20} height={20} />
          ) : (
            ""
          )}
          {USERNAME_STATUS?.status === "CHECKING" && <CircularCoolBlue />}
        </div>
        {USERNAME_ERROR && (
          <p
            className="text-sm text-red-500 text-center"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            * {USERNAME_ERROR}
          </p>
        )}
        <p
          className={`${USERNAME_ERROR ? "mt-2" : "mt-4"} px-2 text-xs font-medium text-[#c0c0c0] text-center`}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Pick a unique username that represents you. Letters, numbers, periods
          and underscores are allowed. This username will be public.
        </p>
      </div>
      <div className="w-full flex flex-col gap-5">
        <MidnightEdge
          text={
            USERNAME_STATUS?.status === "AVAILABLE" && !USERNAME_ERROR
              ? "Continue"
              : "Check availability"
          }
          onClickFn={() => {
            if (USERNAME_STATUS?.status === "AVAILABLE" && !USERNAME_ERROR) {
              sessionStorage.setItem("username", USERNAME_STATUS?.username);
              changeStage();
            } else {
              handleSubmit();
            }
          }}
        />
        <Zebra
          text="Already have an account?"
          onClickFn={() => navigate("/login")}
        />
      </div>
    </div>
  );
}

export default Primary;
