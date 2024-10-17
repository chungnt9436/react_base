import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer/counterSlice'
import authReducer from './reducer/authSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
})
