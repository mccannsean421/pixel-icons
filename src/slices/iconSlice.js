import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    size: 0,
    searchValue: "Testing",
    iconColor: "magenta",
};

export const iconSlice = createSlice({
    name: "icon",
    initialState,
    reducers: {
        updateSize: (state, action) => {
            state.size = action.payload; // Direct assignment, but immutable state
        },
        updateSearchValue: (state, action) => {
            state.searchValue = action.payload; // Direct assignment, but immutable state
        },
        handleColourChange: (state, action) => {
            state.iconColor = action.payload;
        }
    }
});

export const { updateSize, updateSearchValue } = iconSlice.actions;

export default iconSlice.reducer;