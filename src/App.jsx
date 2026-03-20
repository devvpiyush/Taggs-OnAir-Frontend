// External Modules
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

// Local Modules
import { useMe } from "@hook/Auth";
import { useHealth } from "@hook/APIs";
import { AppProgress, AppStatic } from "@component/Loaders";
import { AccessWraper } from "@/context/Accessors";

import "./App.css";

function App() {
  // Declarations
  const health = useHealth();
  const User = useMe();

  const [minLoadComplete, setMinLoadComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinLoadComplete(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const isAppLoading =
    User?.isLoading ||
    health.isLoading ||
    health.isFetching ||
    !minLoadComplete;

  if (isAppLoading) return <AppStatic />;

  if (health.isLoading || health.isFetching) return <AppProgress />;

  return (
    <AccessWraper User={User?.data}>
      <Outlet context={{ User: User?.data }} />
    </AccessWraper>
  );
}

export default App;
