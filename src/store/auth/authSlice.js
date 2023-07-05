import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", // "checking", "not-authenticated", "authenticated"
    uid: null,
    emal: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, action) => {},
    logout: (state, payload) => {},
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});
// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;

// export default authSlice.reducer;
