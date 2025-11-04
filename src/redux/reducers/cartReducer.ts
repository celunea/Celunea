import { createSlice } from '@reduxjs/toolkit'
import {CartState} from "../../constants/interfaces/cartInterface";

const initialState: CartState = {
    goods: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addGoodToCard: (state, action) => {
            for (let i = 0; i < state.goods.length; i++) {
                if (state.goods[i].id === action.payload.id) {
                    state.goods[i].amount = action.payload.amount
                    return
                }
            }
            state.goods.push(action.payload)
        },
        removeGoodFromCart: (state, action) => {
            for (let i = 0; i < state.goods.length; i++) {
                if (state.goods[i].id === action.payload.id) {
                    state.goods.splice(i, 1)
                    return
                }
            }
        },
    },
})

export const { addGoodToCard, removeGoodFromCart } = cartSlice.actions
export default cartSlice.reducer
