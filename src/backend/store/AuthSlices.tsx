import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

// Define the Redux slice for authentication.
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    // Action to handle successful login.
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    },

    // Action to handle successful logout.
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    },

    // Action to handle any error during authentication.
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { login, logout, setError } = authSlice.actions;
export default authSlice.reducer;
