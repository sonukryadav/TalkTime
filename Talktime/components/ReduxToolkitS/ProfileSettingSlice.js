import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    firstName: "firstName",
    lastName: "lastName",
    profilePicture: "",
    mobileNumber: 123456789,
    userAccountName: "userAccountName",
    bio: "bio sd kd smdn csdc",
    email: "123@gmail.com",
    password: "123456",
    overly1: false,
    overly2: false,
}

export const profileSettingSlice = createSlice({
    name: "profileSetting",
    initialState,
    reducers: {
        profileUpdate: (state, action) => {
            Object.assign(state, action.payload);
        },
        overlay1Fun: (state) => {
            state.overly1 = !state.overly1;
        },
        overlay2Fun: (state) => {
            state.overly2 = !state.overly2;
        },
        pictureClick: (state, action) => {
            state.profilePicture = action.payload;
        },
        finalSum:(state, action) =>{
         
            state.mobileNumber=action.payload.phoneNumber;
             state.firstName=action.payload.name ;
            state.lastName='';
            state.userAccountName=action.payload.name;
            state.password=action.payload.password;
           
            
        },
    }
});

export const { profileUpdate, overlay1Fun, overlay2Fun, pictureClick,finalSum } = profileSettingSlice.actions;
export default profileSettingSlice.reducer;