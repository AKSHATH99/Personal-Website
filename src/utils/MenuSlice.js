import { createSlice } from "@reduxjs/toolkit";

// This slice is used to toggle menu to hidden and block when toggle button of header is clicked

const sidebarslice=createSlice({
    name :"sidebar",
    initialState:{
        sidebar:false,
    },
    reducers:{
        hideSidebar:(state)=>{
            state.sidebar=!state.sidebar;
        },
        closeMenu:(state)=>{
            state.sidebar=false;
        }
    }
})

export const {hideSidebar, closeMenu}=sidebarslice.actions;
export  default sidebarslice.reducer;
