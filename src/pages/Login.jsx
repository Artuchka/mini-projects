import React from "react"
import { Navigate } from "react-router-dom"

export const Login = () => {
	if (true) {
		return <Navigate to="/dashboard" />
	}
	return <div>Login</div>
}
