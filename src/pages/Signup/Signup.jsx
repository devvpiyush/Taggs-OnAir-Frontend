// External Modules
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Local Modules
import { onBoardActions } from "@/store/onBoard.js";
import api from "@util/api.util.js";
import Primary from "./Primary";
import Secondary from "./Secondary";
import Trishul from "./Trishul";

function Signup() {
  // Declarations
  const onBoardData = useSelector((store) => store.onBoard);
  const dispatch = useDispatch();

  // Constants, States & References
  const [FLOW_STAGE, SET_FLOW_STAGE] = useState(1);

  // Functions
  async function connectToBackend() {
    try {
      const res = await api("GET", "auth/onboard");
      if (res?.isSuccess && res?.code === "TEMPORARY_AUTH_TOKEN_FOUND") {
        dispatch(onBoardActions.setUser(res?.meta));
        return;
      }
    } catch (err) {
      console.log(`Error at signup: ${err}`);
    }
  }

  useEffect(() => {
    connectToBackend();
  }, []);

  useEffect(() => {
    if (!onBoardData?.username) {
      SET_FLOW_STAGE(1);
    } else if (!onBoardData?.email) {
      SET_FLOW_STAGE(2);
    } else if (onBoardData?.email && !onBoardData?.isEmailVerified) {
      SET_FLOW_STAGE(3);
    }
  }, [onBoardData]);
  return (
    <div className="flex flex-row">
      <div className="w-full h-svh p-3 hidden sm:flex"></div>
      <div className="min-w-[35%] h-svh p-4 flex flex-col items-center justify-between gap-8 sm:gap-4 border border-l-(--primary-border-color)">
        <div className="py-4 flex flex-col items-center justify-center gap-4">
          <span
            className="text-white text-4xl font-semibold sm:font-normal tracking-wider cursor-pointer"
            style={{ fontFamily: "Damion, sans-serif" }}
          >
            Taggs
          </span>
        </div>
        {FLOW_STAGE === 1 && <Primary />}
        {FLOW_STAGE === 2 && <Secondary />}
        {FLOW_STAGE === 3 && <Trishul />}
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
      </div>
    </div>
  );
}

export default Signup;
