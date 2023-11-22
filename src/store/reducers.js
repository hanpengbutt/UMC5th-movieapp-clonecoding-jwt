import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logIn: state => {
      return { ...state, isLoggedIn: true };
    },
    logOut: state => {
      return { ...state, isLoggedIn: false };
    }
  }
});

export const { logIn, logOut } = loginSlice.actions;
export default loginSlice.reducer;
