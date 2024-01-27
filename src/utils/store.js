import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./MenuSlice";

const store = configureStore({
    reducer:{
        sidebar:MenuSlice,
        
    }
})

export default store;
