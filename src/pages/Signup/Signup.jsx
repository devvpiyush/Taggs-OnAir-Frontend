// Local Modules
import Disclaimer from "./Disclaimer";
import Form from "./Form";

function Signup() {
  return (
    <div className="flex flex-row">
      <div className="w-full min-h-svh p-3 hidden sm:flex border border-r-(--primary-border-color)"></div>
      <div className="sm:max-w-[35vw] md:w-fit min-h-svh p-4 flex flex-col items-center justify-between">
        <Disclaimer />
        <span
          className="text-white text-4xl font-semibold sm:font-normal tracking-wider cursor-pointer"
          style={{ fontFamily: "Damion, sans-serif" }}
        >
          Taggs
        </span>
        <Form />
      </div>
    </div>
  );
}

export default Signup;
