import React from "react"
import style from "./product.module.scss"

export const Product = () => {
	return (
		<div className={style["product"]}>
			<img src="/" alt="image for product" />
			<div className={style["info"]}>
				<span className={style["name"]}>modern poster</span>
				<span className={style["price"]}>$30.99</span>
			</div>
		</div>
	)
}
