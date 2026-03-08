// External Modules
import { createSlice } from "@reduxjs/toolkit";

export const onBoard = createSlice({
  name: "onBoard",
  initialState: {
    username: "",
    email: "",
    isEmailVerified: false,
    emailOtpSent: false,
    name: "",
    dateOfBirth: new Date().toISOString(),
  },
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username || state.username;
      state.email = action.payload.email || state.email;
      state.name = action.payload.name || state.name;
      state.dateOfBirth = action.payload.dateOfBirth || state.dateOfBirth;
      state.isEmailVerified =
        action.payload.isEmailVerified || state.isEmailVerified;
      state.emailOtpSent = action.payload.emailOtpSent || state.emailOtpSent;
    },
  },
});

export const onBoardActions = onBoard.actions;

export default onBoard.reducer;
