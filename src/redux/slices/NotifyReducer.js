import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    notifications: []
}

const notifySlice = createSlice({
    name:"notify",
    initialState,
    reducers: {
        setNotifications: (state, action)=>{
            state.notifications = action.payload
        },

        updateNotifications:(state, action)=>{
            state.notifications.push(action.payload)
        }
    }
});

export const {setNotifications, updateNotifications} = notifySlice.actions;

export default notifySlice.reducer;