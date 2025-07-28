import { createSlice } from "@reduxjs/toolkit";

export const searchPageSlice = createSlice({
    name:"searchpage",
    initialState:{},
    reducers:{
        addItem:(state,action)=>{
            return action.payload
        }
    }
})
export const {addItem} = searchPageSlice.actions;

export default searchPageSlice.reducer;