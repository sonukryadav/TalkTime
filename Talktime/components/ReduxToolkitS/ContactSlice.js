import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    contacts : []
};

export const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        getContacts: (state, action) => {
            state.contacts = action.payload;
        }
    }
});

export const { getContacts } = contactSlice.actions;
export default contactSlice.reducer;