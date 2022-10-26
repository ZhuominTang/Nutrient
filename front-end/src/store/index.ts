import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import userApi from "../api/userApi";
import nutritionApi from "../api/nutritionApi";
import { authSlice } from '../api/authSlice';

const reducer = combineReducers({
    [nutritionApi.reducerPath]:nutritionApi.reducer,
    [userApi.reducerPath]:userApi.reducer,   
    auth:authSlice.reducer
})

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware).concat(nutritionApi.middleware),
});

setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof reducer>