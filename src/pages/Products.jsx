import React from "react"
import { FilterForm } from "../components/FilterForm"
import { SortForm } from "../components/SortForm"
import { Product } from "../components/Product"

import "./styles/products.scss"
import { useProductsContext } from "../AppProvider"

export const Products = () => {
	const { isLoading, items, error } = useProductsContext()
	// console.log(items)
	return (
		<div className="products-root">
			<FilterForm className="filter-form" />
			<SortForm className="sort-form" />

			<div className="products">
				<div className="product-list">
					{items.map((item) => {
						return <Product key={item.id} {...item} />
					})}
				</div>
			</div>
		</div>
	)
}
