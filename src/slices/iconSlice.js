import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    size: 69
};

export const iconSlice = createSlice({
    name: "icon",
    initialState,
    reducers: {
        updateSize: (state, action) => {
            state.size = action.payload; // Direct assignment, but immutable state
        }
    }
});

export const { updateSize } = iconSlice.actions;

export default iconSlice.reducer;