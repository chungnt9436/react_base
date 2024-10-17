import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: true,
  isAdmin: true,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.isAdmin = action.payload.isAdmin;
      state.user = action.payload.user;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.isAdmin = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
