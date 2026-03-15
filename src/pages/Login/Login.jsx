// External Modules
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Local Modules
import {
  Taggs,
  AuthInput,
  AuthPrimaryButton,
  AuthSecondaryButton,
} from "@component/Components";

function Login() {
  // Declarations
  const navigate = useNavigate();

  // Constants, States & References
  const [USERNAME_EMAIL, SET_USERNAME_EMAIL] = useState("");
  const [PASSWORD, SET_PASSWORD] = useState("");

  return (
    <div className="w-full min-h-dvh flex flex-row">
      <div className="w-full md:min-w-[55%] md:max-w-[55%] lg:min-w-[65%] lg:max-w-[65%] h-dvh hidden md:block"></div>
      <div className="w-full md:min-w-[45%] md:max-w-[45%] lg:min-w-[35%] lg:max-w-[35%] h-dvh flex flex-col items-center justify-between border-l border-(--primary-border-color)">
        <Taggs />
        <div className="w-full flex flex-col gap-6 px-6">
          <AuthInput
            type="text"
            placeholder="Username or Email"
            value={USERNAME_EMAIL}
            spellCheck={false}
            autoCapitalize={false}
            autoComplete={false}
            onChange={(e) => SET_USERNAME_EMAIL(e.target.value)}
          />
          <AuthInput
            type="password"
            placeholder="Password"
            value={PASSWORD}
            spellCheck={false}
            autoCapitalize={false}
            autoComplete={false}
            onChange={(e) => SET_PASSWORD(e.target.value)}
          />
          <AuthPrimaryButton
            type="button"
            text="Log in"
            isDisabled={USERNAME_EMAIL === "" || PASSWORD === "" ? true : false}
          />
          <a
            className="text-white text-center font-medium cursor-pointer"
            style={{ fontFamily: "Inder, sans-serif" }}
          >
            Forgot Password?
          </a>
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
