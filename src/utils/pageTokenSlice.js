import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name:"page",
    initialState:{},
    reducers:{
        addPage:(state,action)=>{
            return action.payload
        }
    }
})
export const {addPage} = pageSlice.actions;

export default pageSlice.reducer;