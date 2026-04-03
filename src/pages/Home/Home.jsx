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
    <>
      {POSTED && <Created />}
      <Create toggle={SET_POSTED} />
      <Feed />
    </>
  );
}

export default Home;
