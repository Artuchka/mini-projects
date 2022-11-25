import axios from "axios"
import React, { useContext } from "react"
import { useState } from "react"
import { useReducer } from "react"
import { initialState, reducer } from "./reducer"

const AppContext = React.createContext()
const api = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const [searchValue, setSearchValue] = useState("")

	const fetchItems = async () => {
		try {
			dispatch({ type: "SET_LOADING" })
			const resp = await axios.get(`${api}${searchValue}`)
			dispatch({ type: "SET_ITEMS", payload: resp.data.drinks || [] })
			console.log(resp.data.drinks)
		} catch (error) {
			console.warn(error)
			dispatch({ type: "SET_ERROR" })
		} finally {
			dispatch({ type: "UNSET_LOADING" })
		}
	}
	React.useEffect(() => {
		fetchItems()
	}, [searchValue])

	return (
		<AppContext.Provider value={{ ...state, searchValue, setSearchValue }}>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}
