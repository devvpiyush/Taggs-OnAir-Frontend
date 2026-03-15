// External Modules
import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "User",
  initialState: {
    _id: null,
  },
  reducers: {
    SET_USER: (state, { payload }) => {
      state._id = payload._id;
    },
  },
}).reducer;

export default UserSlice.actions;
