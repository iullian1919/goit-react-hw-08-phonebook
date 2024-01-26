import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations.js';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  fetching: false,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      //! REGISTER
      .addCase(register.pending, state => {
        state.error = '';
        state.fetching = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.fetching = false;
      })
      .addCase(register.rejected, (state, { error: rejectionError }) => {
        state.fetching = false;
        state.error = rejectionError
          ? rejectionError.message
          : 'Check email or password';
      })
      //!  LOGIN
      .addCase(logIn.pending, state => {
        state.error = '';
        state.fetching = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.fetching = false;
      })
      .addCase(logIn.rejected, (state, { error: rejectionError }) => {
        state.error = rejectionError
          ? rejectionError.message
          : 'Check email or password';
        state.fetching = false;
      })
      //!LOGOUT
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      // !REFRESH
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, { error: rejectionError }) => {
        state.isRefreshing = false;
        if (rejectionError) {
          if (rejectionError.status === 401) {
            history.push('/login');
          } else {
            console.error('Eroare necunoscută la refreshUser:', rejectionError);
          }
        }
      });
  },
});

export const authReducer = authSlice.reducer;
