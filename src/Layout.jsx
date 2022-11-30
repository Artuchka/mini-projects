import React from "react"
import { Outlet } from "react-router-dom"
import { Header } from "./components/Header"

export const Layout = () => {
	return (
		<div className="app">
			<Header></Header>
			<Outlet></Outlet>
		</div>
	)
}
