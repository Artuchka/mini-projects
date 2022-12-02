import React from "react"
import { CartActions } from "../components/CartActions"
import { CartList } from "../components/CartList"
import "./styles/cart.scss"

export const Cart = () => {
	return (
		<div className="cart">
			<CartList />
			<CartActions />
		</div>
	)
}
