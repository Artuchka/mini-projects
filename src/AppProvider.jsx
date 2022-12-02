import axios from "axios"
import React from "react"
import { useReducer } from "react"
import { useContext } from "react"
import { useEffect } from "react"
import { createContext } from "react"
import { useFetch } from "./customHooks/useFetch"
import {
	SET_PRODUCTS_DATA,
	SET_PRODUCTS_ERROR,
	SET_PRODUCTS_FILTERS,
	SET_PRODUCTS_LOADING,
	SET_PRODUCTS_SORT,
	SET_SINGLE_DATA,
	SET_SINGLE_ERROR,
	SET_SINGLE_LOADING,
} from "./reducers/actionTypes"
import { initialCart, reducerCart } from "./reducers/cartReducer"
import { initialProducts, reducerProd } from "./reducers/productReducer"

const AppContextProducts = createContext()
const AppContextCart = createContext()

const apiAll = "https://course-api.com/react-store-products"
const apiSingle = "https://course-api.com/react-store-single-product"

export const AppProvider = ({ children }) => {
	return (
		<ProductsProvider>
			<CartProvider>{children}</CartProvider>
		</ProductsProvider>
	)
}

const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducerProd, initialProducts)

	const setFilters = (filtersValues) => {
		dispatch({ type: SET_PRODUCTS_FILTERS, payload: filtersValues })
	}
	const setSort = (sortValues) => {
		dispatch({ type: SET_PRODUCTS_SORT, payload: sortValues })
	}

	const fetchAll = async () => {
		dispatch({ type: SET_PRODUCTS_LOADING, payload: true })
		try {
			const resp = await axios.get(`${apiAll}`)
			const { data } = resp
			console.log(data)
			dispatch({ type: SET_PRODUCTS_DATA, payload: data })
		} catch (error) {
			dispatch({ type: SET_PRODUCTS_ERROR, payload: error })
		} finally {
			dispatch({ type: SET_PRODUCTS_LOADING, payload: false })
		}
	}

	const fetchSingle = async (id) => {
		dispatch({ type: SET_SINGLE_LOADING, payload: true })
		try {
			const resp = await axios.get(`${apiSingle}?id=${id}`)
			const { data } = resp
			dispatch({ type: SET_SINGLE_DATA, payload: data })
		} catch (error) {
			dispatch({ type: SET_SINGLE_ERROR, payload: error })
		} finally {
			dispatch({ type: SET_SINGLE_LOADING, payload: false })
		}
	}

	return (
		<AppContextProducts.Provider
			value={{ ...state, fetchAll, fetchSingle, setFilters, setSort }}
		>
			{children}
		</AppContextProducts.Provider>
	)
}

const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducerCart, initialCart)

	return (
		<AppContextCart.Provider value={{ ...state }}>
			{children}
		</AppContextCart.Provider>
	)
}

export const useProductsContext = () => {
	return useContext(AppContextProducts)
}
export const useCartContext = () => {
	return useContext(AppContextCart)
}
