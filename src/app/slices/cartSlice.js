import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		product: [],
	},
	reducers: {
		addToCart: (state, action) => {
			const itemExists = state.product.find(
				(item) => item.id === action.payload.id
			)
			console.log('State : ', state.product)
			state.product.push({ ...action.payload })

			if (itemExists) {
				itemExists.quantity + action.payload.quantity
				console.log('Item Exist Quantity : ', itemExists.quantity)
			} else {
				const quantity = action.payload.quantity
				state.product.push({ ...action.payload, quantity: quantity })
			}
		},
	},
})

export const cartReducer = cartSlice.reducer

export const { addToCart } = cartSlice.actions
