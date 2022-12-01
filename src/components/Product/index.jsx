import React from "react"
import style from "./product.module.scss"
import defaultImage from "./../../assets/img/defaultProduct.jpeg"
import { BiSearch } from "react-icons/bi"
import { Link } from "react-router-dom"

export const Product = (props) => {
	const {
		category,
		colors,
		company,
		description,
		price,
		shipping,
		name,
		image,
		id,
	} = props

	return (
		<div className={style["product"]}>
			<div className={style["image-container"]}>
				<div className={style["lookup"]}>
					<Link to={`/products/${id}`}>
						<BiSearch />
					</Link>
				</div>
				<img src={image || defaultImage} alt="image for product" />
			</div>
			<div className={style["info"]}>
				<span className={style["name"]}>{name}</span>
				<span className={style["price"]}>
					${new Intl.NumberFormat().format(price / 100)}
				</span>
			</div>
		</div>
	)
}
