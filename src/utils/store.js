import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice"
import searchReducer from "./searchSlice"
export const store = configureStore({
    reducer:{
        app:appReducer,
        search:searchReducer,
    }
})