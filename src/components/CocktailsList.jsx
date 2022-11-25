import React from "react"
import { useGlobalContext } from "../AppProvider"
import { CocktailItem } from "./CocktailItem"

export const CocktailsList = () => {
	const { items, isLoading, isError } = useGlobalContext()

	if (isLoading) {
		return "is loading"
	}
	if (isError) {
		return "got some errors please try again"
	}

	if (items.length === 0) {
		return <h1>No Drinks found sorry</h1>
	}

	return (
		<div className="cocktails-grid">
			{items.map((item) => {
				return <CocktailItem key={item.idDrink} {...item} />
			})}
		</div>
	)
}
