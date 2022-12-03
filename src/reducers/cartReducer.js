import {
	ADD_CART_ITEM,
	CLEAR_CART,
	DISABLE_ERROR,
	LOGIN_USER_CART,
	REMOVE_CART_ITEM,
	SET_AMOUNT_CART,
	SET_ERROR,
	SET_USERTOKEN_CART,
	USER_LOGOUT,
} from "./actionTypes"

export const initialCart = {
	items: [],
	userToken: { email: "" },
	error: {},
}

export const reducerCart = (state, action) => {
	if (action.type === ADD_CART_ITEM) {
		const { id, color: newColor, amount: newAmount } = action.payload
		let alreadyHave = false
		let newItems = state.items.map((item) => {
			if (item.id === id && item.color === newColor) {
				alreadyHave = true
				return { ...item, amount: item.amount + newAmount }
			}

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
		return { ...state, items: newItems }
	}

	if (action.type === SET_AMOUNT_CART) {
		const { id, color, amount: amountPayload } = action.payload
		const newItems = state.items.map((item) => {
			if (item.id === id && item.color === color) {
				return { ...item, amount: amountPayload }
			}
			return item
		})
		return { ...state, items: newItems }
	}

	if (action.type === SET_USERTOKEN_CART) {
		return { ...state, userToken: action.payload }
	}
	if (action.type === SET_ERROR) {
		const { code, message } = action.payload
		return { ...state, error: { active: true, message, code } }
	}
	if (action.type === DISABLE_ERROR) {
		return { ...state, error: { active: false, message: "", code: "" } }
	}
	if (action.type === USER_LOGOUT) {
		return { ...state, userToken: { email: "" } }
	}
	throw new Error(`unexpected3 action type requested: ${action.type}`)
}
