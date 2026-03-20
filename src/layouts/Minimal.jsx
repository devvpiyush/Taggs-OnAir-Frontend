// External Modules
import { Outlet, useOutletContext } from "react-router-dom";

function Minimal() {
  // Constants
  const context = useOutletContext();

  return (
    <main>
      <Outlet context={context} />
    </main>
  );
}

export default Minimal;
