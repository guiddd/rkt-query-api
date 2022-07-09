import { setupListeners } from "@reduxjs/toolkit/query";
import { pokeApi } from "../services/pokeApi";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        [pokeApi.reducerPath] : pokeApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(pokeApi.middleware),
});

setupListeners(store.dispatch);