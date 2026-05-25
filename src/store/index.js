// External Modules
import { configureStore } from "@reduxjs/toolkit";

// Local Modules
import UserReducer from "@/store/user.slice.js";

const store = configureStore({
  name: "store",
  reducer: {
    User: UserReducer,
  },
});

export default store;
