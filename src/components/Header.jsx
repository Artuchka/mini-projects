import React from "react"
import { NavLink } from "react-router-dom"

export const Header = () => {
	return (
		<div className="header">
			<h1 className="logo">CockatilsAPI Example</h1>
			<nav className="nav">
				<NavLink to="/" className="link">
					Home
				</NavLink>
				<NavLink to="/about" className="link">
					About
				</NavLink>
			</nav>
		</div>
	)
}
