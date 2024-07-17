import AuthSlicer from './slices/AuthSlicer';
import TokenReducer from './slices/TokenReducer';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from "redux-persist"
import CommonDataReducer from './slices/CommonDataReducer';
import NotifyReducer from './slices/NotifyReducer';

const rootReducer = combineReducers({
    auth: AuthSlicer,
    token: TokenReducer,
    data: CommonDataReducer,
    notify: NotifyReducer,
  })

  const persistConfig = {
    key: 'root',
    storage
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
  export const store = configureStore({
    reducer: persistedReducer
  });
  
  export const persistor = persistStore(store)