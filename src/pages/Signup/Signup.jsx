// External Modules
import { Link } from "react-router-dom";

// Local Modules
import Button from "./Button";
import Primary from "./Primary";

function Signup() {
  return (
    <div className="flex flex-row">
      <div className="w-full min-h-svh p-3 hidden sm:flex border border-r-(--primary-border-color)"></div>
      <div className="sm:max-w-[35vw] md:w-fit min-h-svh p-4 flex flex-col items-center justify-between">
        <div className="py-4 flex flex-col items-center justify-center gap-4">
          <span
            className="text-white text-4xl font-semibold sm:font-normal tracking-wider cursor-pointer"
            style={{ fontFamily: "Damion, sans-serif" }}
          >
            Taggs
          </span>
          <div className="w-full px-1 py-4 sm:px-0 flex flex-col items-center justify-between">
            <Primary />
          </div>
        </div>
        <div className="w-full mt-18 md:mt-0 flex flex-col gap-5">
          <Button text="Continue" />
          <Link to="/login">
            <button
              type="button"
              className="w-full py-3 bg-[#181818] border border-(--primary-border-color) text-white font-medium rounded-full cursor-pointer tracking-wide"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Already have an account?
            </button>
          </Link>
          <p className="text-xs text-center text-white font-normal">
            By continuing, you agree to our{" "}
            <Link href="" className="text-blue-400">
              Terms
            </Link>{" "}
            &{" "}
            <Link href="" className="text-blue-400">
              Privacy Policy.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
