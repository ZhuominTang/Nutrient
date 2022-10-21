import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import userApi from "../api/userApi";
import { authSlice } from '../api/authSlice';

const store = configureStore({
    reducer:{
        [userApi.reducerPath]:userApi.reducer,
        auth:authSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);

export default store;