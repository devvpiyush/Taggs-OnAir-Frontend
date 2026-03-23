// Local Modules
import { getSocket } from "./socket.util";

export const socketEvents = () => {
  const socket = getSocket();

  // Events
  socket.on("connect", () => {
    beatTheHeart();
  });
  socket.on("disconnect", () => {
    ceaseHeartBeat();
  });
};

let beatInterval = null;

export const beatTheHeart = () => {
  if (beatInterval) return;

  const socket = getSocket();
  beatInterval = setInterval(() => {
    socket.emit("heartbeat");
  }, 30 * 1000);
};

export const ceaseHeartBeat = () => {
  if (beatInterval) {
    clearInterval(beatInterval);
    beatInterval = null;
  }
};
