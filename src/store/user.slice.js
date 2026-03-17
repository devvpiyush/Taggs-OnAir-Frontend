// External Modules
import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "User",
  initialState: {
    name: "",
    age: null,
    profilePictureUrl: "",
    isVerified: null,
  },
  reducers: {
    SET_USER: (state, { payload }) => {
      state.name = payload.name;
      state.age = payload.age;
      state.profilePictureUrl = payload.profilePictureUrl;
      state.isVerified = payload.isVerified;
    },
  },
});

export const UserSliceReducer = UserSlice.reducer;
export default UserSlice.actions;
