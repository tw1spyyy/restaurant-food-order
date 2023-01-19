import { configureStore } from '@reduxjs/toolkit'
import Cart from './slices/CartSlice'

export const store = configureStore({
  reducer: {
    Cart
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch