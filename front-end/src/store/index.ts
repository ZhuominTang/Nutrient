import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import userApi from "../api/userApi";
import { authSlice } from '../api/authSlice';
import nutritionApi from "../api/nutritionApi";
const reducer = combineReducers({
    [userApi.reducerPath]:userApi.reducer,
    [nutritionApi.reducerPath]:nutritionApi.reducer,
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