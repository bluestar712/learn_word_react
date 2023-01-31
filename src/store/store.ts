import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {postAPI} from "services/PostService";
import {wordAPI} from "services/WordService";

import appReducer from './reducers/AppSlice'
import userReducer from './reducers/UserSlice'

const rootReducer = combineReducers({
    appReducer,
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer,
    [wordAPI.reducerPath]: wordAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(postAPI.middleware).concat(wordAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
