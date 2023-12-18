import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem("userInfo")) : null,
}

const AuthSlicer = createSlice({
    name: "User",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.userInfo = null;
            localStorage.removeItem("userInfo");
        }
    },
});

export const { setUser } = AuthSlicer.actions;
export default AuthSlicer.reducer;