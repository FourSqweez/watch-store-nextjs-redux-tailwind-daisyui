import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		addToCart: (state, action) => {
			const itemExists = state.find((item) => item.id === action.payload.id)
			if (itemExists) {
				itemExists.quantity += action.payload.quantity
			} else {
				const quantity = action.payload.quantity
				state.push({ ...action.payload, quantity: quantity })
			}
		},
	},
})

export const cartReducer = cartSlice.reducer

export const { addToCart } = cartSlice.actions
