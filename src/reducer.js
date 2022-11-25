export const initialState = {
	items: [],
	isLoading: true,
	isError: false,
}

export const reducer = (state, action) => {
	if (action.type === "SET_ITEMS") {
		return { ...state, items: action.payload }
	}
	if (action.type === "SET_LOADING") {
		return { ...state, isLoading: true }
	}
	if (action.type === "UNSET_LOADING") {
		return { ...state, isLoading: false }
	}
	if (action.type === "SET_ERROR") {
		return { ...state, isError: true }
	}
	if (action.type === "UNSET_ERROR") {
		return { ...state, isError: false }
	}
	throw new Error(`unexpected ${action.type} `)
}
