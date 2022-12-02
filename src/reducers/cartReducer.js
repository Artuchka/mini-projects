export const initialCart = {
	items: [],
	singleItem: {},
}

export const reducerCart = (state, action) => {
	if (action.type === "") {
		return state
	}
	throw new Error(`unexpected3 action type requested: ${action.type}`)
}
