import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    adminDefinedData: [],
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setAdminDefinedData: (state, action) => {
            state.adminDefinedData = action.payload
        },
      
    }
});


export const {setAdminDefinedData} = dataSlice.actions;
export default dataSlice.reducer;