import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./ThemeSlice";
import contactReducer from "./ContactSlice";
import ProfileSettingReducer from "./ProfileSettingSlice";


const store = configureStore({
    reducer: {
        theme: themeReducer,
        contact: contactReducer,
        profile: ProfileSettingReducer,
    }
});


export default store;