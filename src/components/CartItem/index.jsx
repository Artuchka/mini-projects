import React from "react"
import { useState } from "react"
import { Count } from "../Actions"
import { AiFillDelete } from "react-icons/ai"

import style from "./cart-item.module.scss"
import { useCartContext } from "../../AppProvider"
import { useEffect } from "react"

export const CartItem = (props) => {
	const {
		amount: amountChosen,
		images,
		name,
		category,
		reviews,
		stars,
		stock,
		color,
		company,
		description,
		price,
		shipping,
		id,
	} = props

	const img = images?.[0].url || "/"

	const [amount, setAmount] = useState(amountChosen)

	useEffect(() => {
		handleCartSetAmount({ id, color, amount })
	}, [amount])

	const { handleCartItemRemove, handleCartSetAmount } = useCartContext()

	return (
		<div className={style["cart-list__item"]}>
			<img src={img} alt="" className={style["image"]} />
			<div className={style["info"]}>
				<div className={style["name"]}>{name}</div>
				<div className={style["color"]}>
					Color: <span style={{ backgroundColor: color }}></span>
				</div>
				<div className={style["price"]}>{price}</div>
			</div>

			<Count amount={amount} setAmount={setAmount} max={stock} />
			<button
				className="btn btn--delete"
				onClick={() => handleCartItemRemove({ id, color })}
			>
				<AiFillDelete />
			</button>
		</div>
	)
}
