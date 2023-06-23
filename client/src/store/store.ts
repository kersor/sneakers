import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { api } from './api/api'
import userReducer from './slice/user/user.slice'

const reducers = combineReducers({
    [api.reducerPath]: api.reducer,
    userReducer: userReducer
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch