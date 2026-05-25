// External Modules
import { createSlice } from "@reduxjs/toolkit";

const init = {
  locales: {
    isLoading: false,
  },
  username: "iampiyyushb",
  name: "Piyush Bhunwal",
  profilePictureUrl:
    "https://res.cloudinary.com/dtgta9nbo/image/upload/v1775106730/No_Profile_Picture_Icon_Tiktok_snc7gr.jpg",
  isVerified: true,
};

const UserSlice = createSlice({
  name: "User",
  initialState: init,
  reducers: {
    create: (state, action) => {
      state.username = action.payload.username;
      state.user = action.payload.user;
      state.profilePictureUrl = action.payload.profilePictureUrl;
      state.isVerified = action.payload.isVerified;
    },
    config: (state, action) => {},
  },
});

export const { create, config } = UserSlice.actions;

export default UserSlice.reducer;
