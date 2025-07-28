import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name:"app",
    initialState:{
        menuToggle:true
    },
    reducers:{
        sideBarToggle:(state)=>{
            state.menuToggle = !state.menuToggle
        },
        closeMenu:(state)=>{
            state.menuToggle = false
        }
    }
});
export const {sideBarToggle,closeMenu} = appSlice.actions
export default appSlice.reducer