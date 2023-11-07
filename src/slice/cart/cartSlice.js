import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem: []
}

export const cartSlice = createSlice(
    {
        name: "cart",
        initialState,
        reducers: {
            Addtocart: (state, action) => {
                state.cartItem.push(action.payload);
            }
        }
    }
)
export const {Addtocart} = cartSlice.actions
export default cartSlice.reducer
