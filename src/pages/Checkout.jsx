import React from "react"
import { Link, Navigate } from "react-router-dom"
import { useCartContext } from "../AppProvider"
import { formatPrice } from "../utils"
import "./styles/checkout.scss"
export const Checkout = () => {
	const { userToken, items } = useCartContext()

	if (userToken.email === "") {
		return <Navigate to="/" />
	}

	if (items.length === 0) {
		return (
			<div className="checkout">
				<h1>Your Cart Is Empty</h1>
				<Link to="/products">
					<button className="btn">fill it</button>
				</Link>
			</div>
		)
	}

	const total = items.reduce((sum, curr) => {
		return sum + curr.amount * curr.price
	}, 0)

	return (
		<div className="checkout checkout--full">
			<h2>Hello, {userToken.email}</h2>
			<span>Your total is {formatPrice(total)}</span>
			<span>Test Card Number: 4242 4242 4242 4242</span>
			<div className="stripe">im stripe form</div>
		</div>
	)
}
