import React from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../AppProvider"

export const CartActions = () => {
	const { handleCartClear } = useCartContext()
	return (
		<div className="cart-actions">
			<div className="buttons">
				<Link to="/products">
					<button className="btn btn--medium">
						continue shopping
					</button>
				</Link>
				<button
					className="btn btn--medium btn--dark"
					onClick={handleCartClear}
				>
					clear shopping cart
				</button>
			</div>
		</div>
	)
}
