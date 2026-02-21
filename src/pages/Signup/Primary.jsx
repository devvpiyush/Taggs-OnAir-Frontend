// External Modules
import { Link } from "react-router-dom";

// Local Modules
import Button from "./Button";

function Primary() {
  return (
    <>
      <div className="w-full flex flex-col gap-2">
        <span
          className="ml-4 font-medium text-white tracking-wide"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Choose a Username
        </span>
        <input
          type="text"
          minLength={3}
          maxLength={21}
          required
          className="px-6 py-3 outline-none border border-(--primary-border-color) rounded-full text-white font-semibold tracking-wide hover:border-(--primary-border-hover-color)"
          placeholder="Username"
        />
        <p
          className="py-4 text-xs font-medium text-[#c0c0c0] text-center"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Pick a unique username that represents you. Letters, numbers, periods
          and underscores are allowed. This username will be public.
        </p>
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
    </>
  );
}

export default Primary;
