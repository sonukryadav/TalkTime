import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    firstName: "firstName",
    lastName: "lastName",
    profilePicture: "https://cdn.pixabay.com/photo/2016/11/22/23/44/porsche-1851246__340.jpg",
    mobileNumber: 123456789,
    userAccountName: "userAccountName",
    bio: "bio sd kd smdn csdc",
    email: "123@gmail.com",
    password:"********",
}

export const profileSettingSlice = createSlice({
    name: "profileSetting",
    initialState,
    reducers: {
        profileUpdate: (state, action) => {
            state = {...action.payload}
        }
    }
});

export const { profileUpdate } = profileSettingSlice.actions;
export default profileSettingSlice.reducer;