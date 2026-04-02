// Assets
import Check from "@icon/Check.svg";

function Created() {
  return (
    <div className="w-full px-4 pt-4">
      <div className="w-full p-3 flex flex-row items-center justify-start gap-2 bg-[#16211C] border-2 border-green-900 rounded-xl">
        <img src={Check} alt="Check_Icon" />
        <h1
          className="text-sm text-white font-medium tracking-wider"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Thread has been shared Successfully.
        </h1>
      </div>
    </div>
  );
}

export default Created;
