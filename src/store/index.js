// External Modules
import { configureStore } from "@reduxjs/toolkit";

// Local Modules
import { UserSliceReducer } from "./user.slice";

const store = configureStore({
  reducer: {
    User: UserSliceReducer,
  },
});

export default store;
