// External Modules
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// Local Modules
import { connectSocket } from "@util/socket.util";
import { socketEvents, beatTheHeart } from "@util/events.util";
import { useMe } from "@hook/Auth.hooks";
import { AppStatic } from "@component/Loaders";
import { AccessWraper } from "@/context/Accessors";
import { create } from "@/store/user.slice.js";

import "./App.css";

function App() {
  // Declarations
  const dispatch = useDispatch();

  const User = useMe();

  useEffect(() => {
    if (User?.isLoading) return;

    // Dispatches
    dispatch(
      create({
        username: User?.data?.username,
        name: User?.data?.name,
        profilePictureUrl: User?.data?.profilePictureUrl,
        isVerified: User?.data?.isVerified,
      }),
    );
  }, [User?.isLoading]);

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

  if (!minLoadComplete) return <AppStatic />;

  return (
    <AccessWraper User={User}>
      <Outlet />
    </AccessWraper>
  );
}

export default App;
