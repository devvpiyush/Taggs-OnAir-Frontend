// External Modules
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Local Modules
import { AppProgress, AppStatic } from "@component/Loaders";
import { apiCache } from "@data/AppCache.js";
import { useHealth } from "@hook/APIs.js";

import "./App.css";

function App() {
  // Declarations
  const navigate = useNavigate();

  // Constants, States & References
  const [APP_LOAD_PROGRESS, UPDATE_APP_LOAD_PROGRESS] = useState(0);

  useEffect(() => {
    useHealth();

    if (apiCache.checkHealth.loading) {
      const interval = setInterval(() => {
        UPDATE_APP_LOAD_PROGRESS((p) => {
          if (p >= 100) {
            clearInterval(interval);
            return 100;
          }
          return p + 100 / 45;
        });
      }, 1000);

      clearInterval(interval);
    }
  }, [apiCache.checkHealth.loading]);

  return (
    <>
      {apiCache.checkHealth.loading && (
        <AppProgress progress={APP_LOAD_PROGRESS} />
      )}
      {apiCache.authGetMe.loading && <AppStatic />}
      <Outlet />
    </>
  );
}

export default App;
