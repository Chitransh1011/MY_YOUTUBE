import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice"
import searchReducer from "./searchSlice"
import searchPageReducer from "./searchPageSlice"
import pageReducer from "./pageTokenSlice"
export const store = configureStore({
    reducer:{
        app:appReducer,
        search:searchReducer,
        searchpage:searchPageReducer,
        page:pageReducer
    }
})