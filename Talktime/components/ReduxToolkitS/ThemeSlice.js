import { createSlice } from "@reduxjs/toolkit";
import { AsyncSet, AsyncGet, AsyncDelete } from "../AsyncStorageS/AsyncStorage";

let themeLocal = async() => {
    let themeLocal = await AsyncGet("theme");
    return themeLocal || true;
}

console.log(themeLocal());

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
    }
});

// Action creators are generated for each case reducer function
export const { toggle1} = themeSlice1.actions;

export default themeSlice1.reducer;