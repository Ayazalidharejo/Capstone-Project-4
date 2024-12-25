
// import { createSlice } from "@reduxjs/toolkit";

// const profileSlice = createSlice({
//   name: "profile",
//   initialState: {
//     profileValuee: "",
//   },
//   reducers: {
//     setProfile: (state, action) => {
//       state.profileValue = action.payload; 
//     },
//   },
// });

// export const { setProfile } = profileSlice.actions;
// export default profileSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    userName: '',
    email: '',
    password: '',
    alertMessage: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.userName = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.alertMessage = '';
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.userName = '';
            state.email = '';
            state.password = '';
            state.alertMessage = '';
        },
        signUp: (state, action) => {
            state.userName = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.alertMessage = 'Sign up successful!';
        }
    }
});

export const { login, logout, signUp } = authSlice.actions;

export default authSlice.reducer;
