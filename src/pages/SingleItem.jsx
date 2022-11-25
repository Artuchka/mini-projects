import React from "react"
import { Link, useParams } from "react-router-dom"
import { useGlobalContext } from "../AppProvider"

export const SingleItem = () => {
	const { itemId } = useParams()
	const { items } = useGlobalContext()
	const item = items.find((obj) => obj.idDrink === itemId)
	if (!item) {
		return <h1>not found</h1>
	}
	const {
		strGlass: glassType,
		strDrinkThumb: img,
		strAlcoholic: isAlco,
		strDrink: name,
		strCategory: category,
		strInstructions: instructions,
	} = item
	const ingredients = [...Array(16)]
		.map((_, index) => {
			return item[`strIngredient${index}`]
		})
		.filter((ingredient) => (ingredient ? true : false))
	return (
		<>
			<Link to="/">BACK TO HOME</Link>
			<div className="single-item">
				<img src={img} alt="" />
				<div className="info">
					<div className="row">
						<span>Name: </span>
						<div className="name">{name}</div>
					</div>
					<div className="row">
						<span>Category: </span>
						<div className="category">{name}</div>
					</div>
					<div className="row">
						<span>Info: </span>
						<div>{isAlco}</div>
					</div>
					<div className="row">
						<span>Instructions: </span>
						<div className="name">{instructions}</div>
					</div>
					<div className="row">
						<span>Ingredients: </span>
						<div className="ingredients">
							{ingredients.map((ing, ind) => (
								<small key={ind}>{ing}</small>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
