import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    isFetching: false,
    error: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
          state.isFetching= true
    },
    loginSuccess: (state, action) => {
        state.isFetching = false;
        state.currentUser = action.payload;
      },
    loginFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },
    logout: (state) => {
        state = initialState;
        return state;
      },
  },
});

// Action creators are generated for each case reducer function
export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;

export default userSlice.reducer;
 