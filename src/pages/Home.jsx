import React from "react"
import { useState } from "react"
import { useGlobalContext } from "../AppProvider"
import { CocktailsList } from "../components/CocktailsList"

export const Home = () => {
	const { searchValue, setSearchValue } = useGlobalContext()
	const handleInput = (e) => {
		setSearchValue(e.target.value)
	}
	return (
		<div className="home">
			<form className="form">
				<div className="form__title">Search Your Favorite Cocktail</div>
				<input
					type="text"
					className="form__input"
					value={searchValue}
					onChange={handleInput}
				/>
			</form>

			<h1 className="title">Cocktails</h1>
			<CocktailsList />
		</div>
	)
}
