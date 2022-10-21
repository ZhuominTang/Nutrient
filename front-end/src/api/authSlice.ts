import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice(
    {
        name: "auth",
        initialState: () => {
            const token = localStorage.getItem('token')
            const user = localStorage.getItem('user')
            const expirationTime = localStorage.getItem('expirationTime')
            if(!token){
                return {
                    isLogged: false,
                    token: '',
                    user: '',
                    expirationTime: 0
                }
            }else{
                return {
                    isLogged: true,
                    token: token,
                    user: user,
                    expirationTime: expirationTime?+expirationTime:0
                }                
            }

        },
        reducers: {
            login(state, action) {
                state.isLogged = true;
                state.token = action.payload.token;
                state.user = action.payload.user
                const currentTime = Date.now()
                const timeout = 1000 * 60 * 60 * 24 * 7
                state.expirationTime = currentTime + timeout
                localStorage.setItem('token', state.token)
                localStorage.setItem('user', JSON.stringify(state.user))
                localStorage.setItem('expirationTime', state.expirationTime + "")
            },
            logout(state, action) {
                state.isLogged = false;
                state.token = '';
                state.user = null
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                localStorage.removeItem('expirationTime')
            }
        }
    }
)
export const { login, logout } = authSlice.actions