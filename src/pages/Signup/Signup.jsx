// External Modules
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Local Modules
import Primary from "./Primary";
import Secondary from "./Secondary";

function Signup() {
  const [MULTI_STEP_STAGE, SET_MULTI_STEP_STAGE] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("username")) {
      SET_MULTI_STEP_STAGE(1);
      return;
    }
  }, []);

  function changeStage() {
    if (MULTI_STEP_STAGE === 0) {
      SET_MULTI_STEP_STAGE(1);
    }
  }
  return (
    <div className="flex flex-row">
      <div className="w-full min-h-svh p-3 hidden sm:flex"></div>
      <div className="min-w-[35%] min-h-svh p-4 flex flex-col items-center justify-between gap-8 sm:gap-4 border border-l-(--primary-border-color)">
        <div className="py-4 flex flex-col items-center justify-center gap-4">
          <span
            className="text-white text-4xl font-semibold sm:font-normal tracking-wider cursor-pointer"
            style={{ fontFamily: "Damion, sans-serif" }}
          >
            Taggs
          </span>
        </div>
        {MULTI_STEP_STAGE === 0 && <Primary changeStage={changeStage} />}
        {MULTI_STEP_STAGE === 1 && <Secondary changeStage={changeStage} />}
        {MULTI_STEP_STAGE === 0 && (
          <p className="text-xs text-center text-white font-normal">
            By continuing, you agree to our{" "}
            <Link to="/terms" className="text-blue-400">
              Terms
            </Link>{" "}
            &{" "}
            <Link to="/privacy" className="text-blue-400">
              Privacy Policy.
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default Signup;
