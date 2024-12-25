import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    userName: '',
    alertMessage: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.userName = action.payload.name;
            state.alertMessage = ''; // Clear alert on login
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.userName = '';
            state.alertMessage = ''; // Clear alert on logout
        },
        signUp: (state, action) => {
            state.userName = action.payload.name;
            state.alertMessage = 'Sign up successful!'; // Set alert message on sign up
        }
    }
});

export const { login, logout, signUp } = authSlice.actions;

export default authSlice.reducer;