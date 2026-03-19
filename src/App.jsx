// External Modules
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Local Modules
import { useMe } from "@hook/Auth";
import { useHealth } from "@hook/APIs";
import { AppProgress, AppStatic } from "@component/Loaders";

import "./App.css";

function App() {
  // Declarations
  const navigate = useNavigate();
  const Health = useHealth();
  const User = useMe();

  // Constants, States & References
  const [APP_LOAD_PROGRESS, UPDATE_APP_LOAD_PROGRESS] = useState(0);

  useEffect(() => {
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

  if (Health.isLoading || Health.isFetching)
    return <AppProgress progress={APP_LOAD_PROGRESS} />;

  if (User.isLoading) return <AppStatic />;

  return <Outlet />;
}

export default App;
