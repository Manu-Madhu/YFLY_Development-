import {configureStore} from '@reduxjs/toolkit'
import AuthSlicer from './slices/AuthSlicer';

const store =configureStore({
    reducer:{
        auth: AuthSlicer
    }
})


export default store;