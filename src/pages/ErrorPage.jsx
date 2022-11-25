import React from "react"
import { Link } from "react-router-dom"

export const ErrorPage = () => {
	return (
		<div>
			<h1>NOT FOUND PAGE</h1>
			<Link to="/">back to home</Link>
		</div>
	)
}
