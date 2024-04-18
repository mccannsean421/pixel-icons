import { configureStore } from "@reduxjs/toolkit";
import iconReducer from "./slices/iconSlice";

export const store = configureStore({
    reducer: {
        icon: iconReducer
    }
})