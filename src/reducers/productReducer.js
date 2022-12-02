import {
	SET_SINGLE_DATA,
	SET_SINGLE_ERROR,
	SET_SINGLE_LOADING,
	SET_PRODUCTS_LOADING,
	SET_PRODUCTS_DATA,
	SET_PRODUCTS_ERROR,
	SET_PRODUCTS_FILTERS,
	SET_PRODUCTS_SORT,
} from "./actionTypes"

export const initialProducts = {
	items: [],
	singleItem: {},

	filters: {},
	sort: { view: "tiles", sortBy: "price_high" },

	isSingleLoading: true,
	isAllLoading: true,

	errorAll: { message: "", name: "", code: "" },
	errorSingle: { message: "", name: "", code: "" },
}

export const reducerProd = (state, action) => {
	if (action.type === SET_SINGLE_LOADING) {
		return { ...state, isSingleLoading: action.payload }
	}
	if (action.type === SET_SINGLE_DATA) {
		return { ...state, singleItem: action.payload }
	}
	if (action.type === SET_SINGLE_ERROR) {
		if (!action.payload.response) {
			return { ...state, errorSingle: action.payload }
		}
		const {
			response: { data: message, status: code },
			name,
		} = action.payload
		return { ...state, errorSingle: { message, name, code } }
	}

	if (action.type === SET_PRODUCTS_LOADING) {
		return { ...state, isAllLoading: action.payload }
	}
	if (action.type === SET_PRODUCTS_ERROR) {
		console.log("prod err", action.payload)
		if (!action.payload.response) {
			return { ...state, errorAll: action.payload }
		}
		const {
			response: { data: message, status: code },
			name,
		} = action.payload
		return { ...state, errorAll: { message, name, code } }
	}
	if (action.type === SET_PRODUCTS_DATA) {
		return { ...state, items: action.payload }
	}

	if (action.type === SET_PRODUCTS_FILTERS) {
		// console.log("setting filters", action.payload)
		const { name, value } = action.payload
		return { ...state, filters: { ...state.filters, [name]: value } }
	}

	if (action.type === SET_PRODUCTS_SORT) {
		// console.log("setting sorts", action.payload)
		const { name, value } = action.payload
		return { ...state, sort: { ...state.sort, [name]: value } }
	}

	throw new Error(`unexpected action type requested: ${action.type}`)
}
