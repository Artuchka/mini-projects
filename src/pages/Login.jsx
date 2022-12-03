import React from "react"
import { useState } from "react"
import { useRef } from "react"
import { useCartContext } from "../AppProvider"
import "./styles/login.scss"

export const Login = () => {
	const [email, setEmail] = useState("testemail@gmail.com")
	const [password, setPassword] = useState("1234567")

	const { handleLogin, handleSignUp } = useCartContext()

	const handleLoginClick = (e) => {
		e.preventDefault()
		handleLogin({ email, password })
	}
	const handleSignUpClick = (e) => {
		e.preventDefault()

		handleSignUp({ email, password })
	}

	return (
		<div className="login-page">
			<form className="form">
				<div className="title">Login</div>
				<div className="row">
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						id="email"
						className="input"
						placeholder=" "
					/>
					<label htmlFor="email" className="label">
						Email
					</label>
				</div>
				<div className="row">
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						id="password"
						className="input"
						placeholder=" "
					/>
					<label htmlFor="password" className="label">
						password
					</label>
				</div>

				<div className="actions">
					<button
						className="btn btn--dark"
						onClick={handleLoginClick}
						disabled={email === "" || password === ""}
					>
						Login
					</button>
					<button
						className="btn btn--dark"
						onClick={handleSignUpClick}
						disabled={email === "" || password === ""}
					>
						SignUp
					</button>
				</div>
			</form>
		</div>
	)
}
