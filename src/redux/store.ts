import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cartReducer'
import modalReducer from "./reducers/modalReducer";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
