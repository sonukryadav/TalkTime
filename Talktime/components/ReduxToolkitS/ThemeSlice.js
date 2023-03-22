import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: true,
};

export const themeSlice1 = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggle1: (state) => {
            state.theme = !state.theme;
        },
        toggle2: (state, action) => {
            state.theme = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { toggle1, toggle2} = themeSlice1.actions;

export default themeSlice1.reducer;