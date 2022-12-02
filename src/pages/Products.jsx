import React from "react"
import { FilterForm } from "../components/FilterForm"
import { SortForm } from "../components/SortForm"
import { Product } from "../components/Product"

import "./styles/products.scss"
import { useProductsContext } from "../AppProvider"
import { Loading } from "../components/Loading"
import { useEffect } from "react"

export const Products = () => {
	const {
		items,
		filters,
		isAllLoading: loading,
		errorAll: error,
		fetchAll,
		sort: { sortBy, view },
	} = useProductsContext()
	const { search, company, category, color, price } = filters
	console.log(items)

	useEffect(() => {
		fetchAll()
	}, [fetchAll])

	if (loading) {
		return <Loading />
	}

	if (error.code !== "") {
		const { message, code, name } = error
		console.log(error)
		return (
			<h1>
				Error occured: {message} {code}
			</h1>
		)
	}

	const filteredItems = items.filter((item) => {
		if (!item.name.includes(search)) return false
		if (category !== "all" && !item.category.includes(category))
			return false
		if (company !== "all" && !item.company.includes(company)) return false
		if (color !== "any" && !item.colors.includes(color)) return false
		if (parseInt(item.price / 100) > parseInt(price)) return false
		return true
	})

	const filteredAndSortedItem = filteredItems.sort((a, b) => {
		if (sortBy === "price_high") return compare(b, a, "price")
		if (sortBy === "price_low") return compare(a, b, "price")
		if (sortBy === "name_az") return compare(a, b, "name")
		if (sortBy === "name_za") return compare(b, a, "name")
	})
	return (
		<div className="products-root">
			<FilterForm className="filter-form" />
			<SortForm className="sort-form" amount={filteredItems.length} />

			<div className="products">
				<div
					className="product-list"
					style={{
						gridTemplateColumns: view === "list" ? "1fr" : "",
					}}
				>
					{filteredAndSortedItem.map((item) => {
						return <Product key={item.id} {...item} view={view} />
					})}
				</div>
			</div>
		</div>
	)
}

const compare = (a, b, prop) => {
	if (a[prop] > b[prop]) return 1
	if (a[prop] < b[prop]) return -1
	return 0
}
