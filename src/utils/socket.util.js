// External Modules
import { io } from "socket.io-client";

let socket;

export const connectSocket = () => {
  socket = io(import.meta.env.VITE_API_BASE_URL, {
    withCredentials: true,
    transports: ["websocket", "polling"],
  });

  return socket;
};

export const getSocket = () => socket;
