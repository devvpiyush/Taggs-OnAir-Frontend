// External Modules
import { Outlet } from "react-router-dom";

// Local Modules
import Navbar from "@component/Navbar";
import Navigator from "@component/Navigator";

function Classic({ excluded = "None" }) {
  return (
    <>
      {excluded !== "Header" && (
        <header>
          <Navbar />
        </header>
      )}
      <main>
        <Outlet />
        <Navigator />
      </main>
    </>
  );
}

export default Classic;
