import React from "react"
import { useCartContext } from "../AppProvider"
import { CartItem } from "./CartItem"

export const CartList = () => {
	const { items } = useCartContext()
	return (
		<div className="cart-list">
			{items?.map((item) => {
				return <CartItem {...item} key={`${item.id}${item.color}`} />
			})}
		</div>
	)
}
