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
		view,
	} = props

	return (
		<div
			className={`product-container-item ${style["product"]} ${
				view === "list" ? "list" : ""
			}`}
			style={{
				maxWidth: view === "tiles" ? "500px" : "1000px",
			}}
		>
			<div className={style["image-container"]}>
				<div className={style["lookup"]}>
					<Link to={`/products/${id}`}>
						<BiSearch />
					</Link>
				</div>
				<img src={image || defaultImage} alt="image for product" />
			</div>
			{view === "tiles" && (
				<div className={style["info"]}>
					<span className={style["name"]}>{name}</span>
					<span className={style["price"]}>
						${new Intl.NumberFormat().format(price / 100)}
					</span>
				</div>
			)}
			{view === "list" && (
				<div className={`${style["info"]} ${style["info-list"]}`}>
					<span className={style["name"]}>{name}</span>
					<span className={style["price"]}>
						${new Intl.NumberFormat().format(price / 100)}
					</span>
					<span className={style["description"]}>
						{description.slice(0, 150)}...
					</span>
					<Link to={`/products/${id}`}>
						<button className="btn btn--small">details</button>
					</Link>
				</div>
			)}
		</div>
	)
}
