import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./ThemeSlice";
import contactReducer from "./ContactSlice";


const store = configureStore({
    reducer: {
        theme: themeReducer,
        contact: contactReducer,
    }
});


export default store;