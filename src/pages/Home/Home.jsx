// External Modules
import { useState } from "react";

// Local Modules
import Create from "./Create";
import Created from "./Created";
import Feed from "./Feed";

function Home() {
  // States
  const [POSTED, SET_POSTED] = useState(false);

  return (
    <div className="w-full p-4 flex flex-col gap-4">
      {POSTED && <Created />}
      <Create toggle={SET_POSTED} />
      <Feed />
    </div>
  );
}

export default Home;
