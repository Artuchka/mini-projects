import { ADD_CART_ITEM, CLEAR_CART, REMOVE_CART_ITEM } from "./actionTypes"

export const initialCart = {
	items: [],
}

export const reducerCart = (state, action) => {
	if (action.type === ADD_CART_ITEM) {
		console.log("trying to add", action.payload)
		const { id, color: newColor, amount: newAmount } = action.payload
		console.log(state)
		let alreadyHave = false
		let newItems = state.items.map((item) => {
			console.log("before if")
			if (item.id === id && item.color === newColor) {
				console.log("yes")
				alreadyHave = true
				return { ...item, amount: item.amount + newAmount }
			}
			console.log("just returning")

			return item
		})
		if (!alreadyHave) {
			newItems = [...newItems, action.payload]
		}
		console.log("setting items", newItems)
		return { ...state, items: newItems }
	}
	if (action.type === CLEAR_CART) {
		console.log("clearing cart")
		return { ...state, items: [] }
	}
	if (action.type === REMOVE_CART_ITEM) {
		console.log("removing item")
		console.log(action.payload)
		const { id, color } = action.payload
		const newItems = state.items.filter((obj) => {
			return !(obj.id === id && obj.color === color)
		})
		console.log("new items= ", newItems)
		return { ...state, items: newItems }
	}

	throw new Error(`unexpected3 action type requested: ${action.type}`)
}
