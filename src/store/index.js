// External Modules
import { configureStore } from "@reduxjs/toolkit";

// Local Modules
import onBoard from "./onBoard.js";

const store = configureStore({
  reducer: {
    onBoard: onBoard,
  },
});

export default store;
