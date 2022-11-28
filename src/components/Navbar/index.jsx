import React from "react"

import "./navbar.scss"

export const Navbar = () => {
	return (
		<div className="nav-bar">
			<img src="/" alt="avatar" className="avatar" />
			<span>
				Welcome, <b>{"name"}</b>
			</span>
			<span className="btn-logout">Logout</span>
		</div>
	)
}
