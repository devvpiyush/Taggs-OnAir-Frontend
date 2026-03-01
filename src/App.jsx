// External Modules
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

// Local Modules
import { ProgressNavy } from "@component/Loaders";
import { apiCache } from "@data/cache.js";
import { checkHealth } from "@hook/APIs.js";

import "./App.css";

function App() {
  // States
  const [APP_LOAD_PROGRESS, UPDATE_APP_LOAD_PROGRESS] = useState(0);

  useEffect(() => {
    checkHealth();

    if (!apiCache.health.loading) return;
    const interval = setInterval(() => {
      UPDATE_APP_LOAD_PROGRESS((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 100 / 45;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return apiCache.health.loading ? (
    <ProgressNavy progress={APP_LOAD_PROGRESS} />
  ) : (
    <Outlet />
  );
}

export default App;
