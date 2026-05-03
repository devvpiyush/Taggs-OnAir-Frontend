// External Modules
import { useState } from "react";

// Local Modules
import Classic from "@/layouts/Classic";
import { BrandHead } from "@component/Brand";
import Created from "./Created";
import Create from "./Create";
import Feed from "./Feed";
import Suggestions from "./Suggestions";

function Home() {
  // States
  const [POSTED, SET_POSTED] = useState(false);

  return (
    <Classic>
      <BrandHead />
      <div className="p-4 flex flex-row gap-4">
        <div className="w-full flex flex-col gap-4">
          {POSTED && <Created />}
          <Create toggle={SET_POSTED} />
          <Feed />
        </div>
        <Suggestions />
      </div>
    </Classic>
  );
}

export default Home;
