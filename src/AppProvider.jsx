import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useContext } from "react"
import { createContext } from "react"
import followersInitial from "./mockData/mockFollowers"
import reposInitial from "./mockData/mockRepos"
import userInitial from "./mockData/mockUser"

const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const [followers, setFollowers] = useState(followersInitial)
	const [repos, setRepos] = useState(reposInitial)
	const [foundUser, setFoundUser] = useState(userInitial)

	return (
		<AppContext.Provider value={{ followers, repos, foundUser }}>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}
