import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Sugar } from "./components/Sugar"

import "./pages/styles/layout.scss"

export const Layout = () => {
	const { pathname } = useLocation()
	console.log(pathname)
	return (
		<div className="app">
			<Header></Header>
			{pathname !== "/" && <Sugar />}
			<main className="main">
				<Outlet></Outlet>
			</main>
			<Footer />
		</div>
	)
}
