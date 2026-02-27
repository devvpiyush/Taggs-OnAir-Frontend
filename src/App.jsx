// External Modules
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

// Local Modules
import { checkHealth } from "@hook/APIs.js";

import "./App.css";

function App() {
  useEffect(() => {
    checkHealth();
  }, []);

  return <Outlet />;
}

export default App;
