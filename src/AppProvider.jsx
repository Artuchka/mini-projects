import React from "react"
import { useContext } from "react"
import { createContext } from "react"
import { useFetch } from "./customHooks/useFetch"

const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const { isLoading, items, error } = useFetch()
	return (
		<AppContext.Provider value={{ isLoading, items, error }}>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}
