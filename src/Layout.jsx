import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Sugar } from "./components/Sugar"

import "./pages/styles/layout.scss"
import { Error } from "./components/Error"

export const Layout = () => {
	const { pathname } = useLocation()
	return (
		<div className="app">
			<Error />
			<Header></Header>
			{pathname !== "/" && <Sugar />}
			<main className="main">
				<Outlet></Outlet>
			</main>
			<Footer />
		</div>
	)
}
