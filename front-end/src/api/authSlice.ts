import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice(
    {
        name: "auth",
        initialState: () => {
            const token = localStorage.getItem('token')
            const user = localStorage.getItem('user')
            if(!token){
                return {
                    isLogged: false,
                    token: '',
                    user: ''
                }
            }else{
                return {
                    isLogged: true,
                    token: token,
                    user: user
                }                
            }

        },
        reducers: {
            login(state, action) {
                state.isLogged = true;
                state.token = action.payload.token;
                state.user = action.payload.user
                localStorage.setItem('token', state.token)
                localStorage.setItem('user', JSON.stringify(state.user))
            },
            logout(state, action) {
                state.isLogged = false;
                state.token = '';
                state.user = null
                localStorage.removeItem('token')
                localStorage.removeItem('user')
            }
        }
    }
)
export const { login, logout } = authSlice.actions