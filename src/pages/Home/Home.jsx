// External Modules
import { useState } from "react";

// Local Modules
import Classic from "@/layouts/Classic";
import Create from "./Create";
import Created from "./Created";
import Feed from "./Feed";

function Home() {
  // States
  const [POSTED, SET_POSTED] = useState(false);

  return (
    <Classic>
      <div className="w-full p-4 flex flex-col gap-4">
        <div className="hidden md:flex w-full py-2 items-center justify-center border-b border-[#232323]">
          <h1
            className="text-3xl mb-2 text-white tracking-wider"
            style={{ fontFamily: "Damion, sans-serif" }}
          >
            Taggs
          </h1>
        </div>
        {POSTED && <Created />}
        <Create toggle={SET_POSTED} />
        <Feed />
      </div>
    </Classic>
  );
}

export default Home;
