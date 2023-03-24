import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    firstName: "firstName",
    lastName: "lastName",
    profilePicture: "",
    mobileNumber: 123456789,
    userAccountName: "userAccountName",
    bio: "bio sd kd smdn csdc",
    email: "123@gmail.com",
    password: "********",
    overly1: false,
}

export const profileSettingSlice = createSlice({
    name: "profileSetting",
    initialState,
    reducers: {
        profileUpdate: (state, action) => {
            state = {...action.payload}
        },
        overlay1Fun: (state) => {
            state.overly1 = !state.overly1;
        },
        pictureClick: (state, action) => {
            state.profilePicture = action.payload;
        },
    }
});

export const { profileUpdate, overlay1Fun, pictureClick } = profileSettingSlice.actions;
export default profileSettingSlice.reducer;