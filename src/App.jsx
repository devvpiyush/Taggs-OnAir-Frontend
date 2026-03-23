// External Modules
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

// Local Modules
import { connectSocket } from "@util/socket.util";
import { socketEvents, beatTheHeart } from "@util/events.util";
import { useMe } from "@hook/Auth";
import { AppStatic } from "@component/Loaders";
import { AccessWraper } from "@/context/Accessors";

import "./App.css";

function App() {
  // Declarations
  const User = useMe();

  const [minLoadComplete, setMinLoadComplete] = useState(false);

  useEffect(() => {
    if (!User?.isLoading && !User?.data) return;

    const socket = connectSocket();

    // Registering Socket Events
    socketEvents();

    // Events
    socket.on("connect", () => {
      beatTheHeart();
    });

    return () => {
      socket.disconnect();
    };
  }, [User?.isLoading, User?.data]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinLoadComplete(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const isAppLoading = User?.isLoading || !minLoadComplete;

  if (isAppLoading) return <AppStatic />;

  return (
    <AccessWraper User={User?.data}>
      <Outlet context={{ me: User }} />
    </AccessWraper>
  );
}

export default App;
