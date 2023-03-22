import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./ThemeSlice"


const store = configureStore({
    reducer: {
        Theme: themeReducer,
    }
});


export default store;