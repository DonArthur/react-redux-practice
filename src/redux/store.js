import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../containers/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer,
})