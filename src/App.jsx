import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Error } from "./pages/Error"
import { Dashboard } from "./pages/Dashboard"
import React from "react"

function App() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="*" element={<Error />} />
		</Routes>
	)
}

export default App
