import { configureStore } from '@reduxjs/toolkit'
import AuthSlicer from './slices/AuthSlicer';
import SearchSlicer from "./slices/SearchSlicer"

const store = configureStore({
    reducer: {
        auth: AuthSlicer,
        search: SearchSlicer
    }
})


export default store;