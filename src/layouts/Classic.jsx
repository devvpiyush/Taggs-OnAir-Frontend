// External Modules
import { Outlet, useOutletContext } from "react-router-dom";

// Local Modules
import Navbar from "@component/Navbar";
import Navigator from "@component/Navigator";

function Classic({ excluded = "None" }) {
  // Constants
  const context = useOutletContext();

  return (
    <>
      {excluded !== "Header" && (
        <header>
          <Navbar />
        </header>
      )}
      <main>
        <Outlet context={context} />
        <Navigator />
      </main>
    </>
  );
}

export default Classic;
