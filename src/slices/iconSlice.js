import { createSlice } from "@reduxjs/toolkit";
import IconList from "../utils/constants";

const initialState = {
    size: 0,
    searchValue: "",
    iconColor: "magenta",
    iconList: IconList,
};

export const iconSlice = createSlice({
    name: "icon",
    initialState,
    reducers: {
        updateSize: (state, action) => {
            state.size = action.payload; // Direct assignment, but immutable state
        },
        updateSearchValue: (state, action) => {
            const searchString = action.payload;
            state.searchValue = searchString;

            state.iconList = IconList.filter(icon => icon.name?.includes(searchString)) // Direct assignment, but immutable state
        },
        handleColourChange: (state, action) => {
            state.iconColor = action.payload.hex;
        }
    }
});

export const { updateSize, updateSearchValue, handleColourChange } = iconSlice.actions;

export default iconSlice.reducer;