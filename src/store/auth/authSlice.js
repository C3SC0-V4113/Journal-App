import { createSlice } from "@reduxjs/toolkit";
import { startGoogleSignIn } from "./thunks";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", // "checking", "not-authenticated", "authenticated"
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload?.errorMessage ? payload.errorMessage : null;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(startGoogleSignIn.fulfilled, (state, action) => {
      // Add user to the state array
      login(action.payload);
    });
  },
});
// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;

// export default authSlice.reducer;
