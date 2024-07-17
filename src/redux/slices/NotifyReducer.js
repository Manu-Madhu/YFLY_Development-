import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    notifcations: []
}

const notifySlice = createSlice({
    name:"notify",
    initialState,
    reducers: {
        setNotifications: (state, action)=>{
            state.notifcations = action.payload
        },

        updateNotifications:(state, action)=>{
            state.notifcations.push(action.payload)
        }
    }
});

export const {setNotifications, updateNotifications} = notifySlice.actions;

export default notifySlice.reducer;