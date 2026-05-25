// External Modules
import { Outlet } from "react-router-dom";

// Local Modules
import Navigator from "@component/Navigator";
import Sidebar from "@component/Sidebar";

function Shell() {
  return (
    <div className="w-full md:flex md:flex-row">
      <aside>
        <Sidebar />
      </aside>
      <main className="w-full">
        <Outlet />
        <section className="md:hidden">
          <Navigator />
        </section>
      </main>
    </div>
  );
}

export default Shell;
