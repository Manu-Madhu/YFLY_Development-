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
            const existing = state.notifications?.map(item=> item?._id).includes(action.payload?._id)

            if(!existing){
                state.notifications.push(action.payload)
            }
        }
    }
});

export const {setNotifications, updateNotifications} = notifySlice.actions;

export default notifySlice.reducer;