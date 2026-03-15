// External Modules
import { configureStore } from "@reduxjs/toolkit";

// Local Modules
import { UserSlice } from "./user.slice";

const store = configureStore({
  reducer: {
    User: UserSlice,
  },
});

export default store;
