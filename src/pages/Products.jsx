import React from "react"
import { Sugar } from "../components/Sugar"
import { FilterForm } from "../components/FilterForm"
import { SortForm } from "../components/SortForm"
import { Product } from "../components/Product"

import "./styles/products.scss"

export const Products = () => {
	return (
		<div>
			<Sugar />
			<FilterForm />
			<SortForm />

			<div className="product-list">
				<Product />
				<Product />
				<Product />
			</div>
		</div>
	)
}
