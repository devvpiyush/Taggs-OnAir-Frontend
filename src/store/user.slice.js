// External Modules
import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "User",
  initialState: {
    name: "",
    profilePictureUrl: "",
    isVerified: null,
  },
  reducers: {
    SET_USER: (state, { payload }) => {
      state.name = payload.name;
      state.profilePictureUrl = payload.profilePictureUrl;
      state.isVerified = payload.isVerified;
    },
  },
}).reducer;

export default UserSlice.actions;
