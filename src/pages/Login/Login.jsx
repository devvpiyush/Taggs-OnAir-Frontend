// External Modules
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Local Modules
import { useLogin } from "@hook/Auth";
import {
  Taggs,
  AuthInput,
  AuthInputWithIcon,
  AuthPrimaryButton,
  AuthSecondaryButton,
} from "@component/Components";

// Assets
import Warning from "@icon/Warning.svg";
import Show from "@icon/Show.svg";
import Hide from "@icon/Hide.svg";

function Login() {
  // Declarations
  const navigate = useNavigate();

  // Constants, States & References
  const [USERNAME_EMAIL, SET_USERNAME_EMAIL] = useState("");
  const [PASSWORD, SET_PASSWORD] = useState("");
  const [PASSWORD_VISIBILITY, SET_PASSWORD_VISIBILITY] = useState("hidden");
  const { mutate, isPending: LoginPending, isError, error } = useLogin();
  return (
    <div className="w-full min-h-dvh flex flex-row">
      <div className="w-full md:min-w-[55%] md:max-w-[55%] lg:min-w-[65%] lg:max-w-[65%] h-dvh hidden md:block"></div>
      <div className="w-full md:min-w-[45%] md:max-w-[45%] lg:min-w-[35%] lg:max-w-[35%] h-dvh flex flex-col items-center justify-between border-l border-(--primary-border-color)">
        <Taggs />
        <div className="w-full flex flex-col gap-6 px-6">
          <AuthInput
            placeholder="Username or Email"
            value={USERNAME_EMAIL}
            minLength={3}
            maxLength={21}
            onChange={(e) => SET_USERNAME_EMAIL(e.target.value)}
          />
          <AuthInputWithIcon
            type={PASSWORD_VISIBILITY === "hidden" ? "password" : "text"}
            placeholder="Password"
            value={PASSWORD}
            minLength={6}
            maxLength={64}
            icon={PASSWORD_VISIBILITY === "hidden" ? Show : Hide}
            iconVisible={PASSWORD === "" ? false : true}
            onChange={(e) => SET_PASSWORD(e.target.value)}
            onIconClick={() => {
              SET_PASSWORD_VISIBILITY(
                PASSWORD_VISIBILITY === "hidden" ? "shown" : "hidden",
              );
            }}
          />
          {isError && (
            <div className="w-full flex flex-row items-start justify-center gap-2">
              <img src={Warning} alt="Warning_Icon" width={21} height={21} />
              <p
                className="text-sm text-red-600 text-center font-medium"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {error?.message} {/* Temporary */}
              </p>
            </div>
          )}

          <AuthPrimaryButton
            type="button"
            text={LoginPending ? "Logging in" : "Log in"}
            isDisabled={
              USERNAME_EMAIL === "" || PASSWORD === "" || LoginPending
                ? true
                : false
            }
            onClick={() => {
              mutate({ usernameOrEmail: USERNAME_EMAIL, password: PASSWORD });
            }}
          />
          <Link
            to="/reset"
            className="text-white text-center font-medium cursor-pointer"
            style={{ fontFamily: "Inder, sans-serif" }}
          >
            Forgot Password?
          </Link>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-2 px-6 py-3">
          <div className="w-1/2 h-1 bg-gray-500 rounded-full" />
          <AuthSecondaryButton
            type="button"
            text="Create Account"
            onClick={() => navigate("/signup")}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
