// External Modules
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

// Local Modules
import { useMe } from "@hook/Auth";
import { AppStatic } from "@component/Loaders";
import { AccessWraper } from "@/context/Accessors";

import "./App.css";

function App() {
  // Declarations
  const User = useMe();

  const [minLoadComplete, setMinLoadComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinLoadComplete(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!minLoadComplete) return <AppStatic />;

  return (
    <AccessWraper User={User?.data}>
      <Outlet context={{ me: User }} />
    </AccessWraper>
  );
}

export default App;
