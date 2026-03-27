// External Modules
import { useState } from "react";

// Local Modules
import Create from "./Create";
import Created from "./Created";

function Home() {
  const [POSTED, SET_POSTED] = useState(false);
  return (
    <>
      {POSTED && <Created />}
      <Create toggle={SET_POSTED} />
    </>
  );
}

export default Home;
