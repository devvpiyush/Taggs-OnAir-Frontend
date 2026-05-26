// External Modules
import { createSlice } from "@reduxjs/toolkit";

const init = {
  username: "",
  name: "",
  profilePictureUrl: "",
  isVerified: false,
};

const UserSlice = createSlice({
  name: "User",
  initialState: init,
  reducers: {
    create: (state, action) => {
      state.username = action.payload.username;
      state.name = action.payload.name;
      state.profilePictureUrl = action.payload.profilePictureUrl;
      state.isVerified = action.payload.isVerified;
    },
  },
});

export const { create } = UserSlice.actions;

export default UserSlice.reducer;
