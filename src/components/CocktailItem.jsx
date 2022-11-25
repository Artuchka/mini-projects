import React from "react"
import { Link } from "react-router-dom"

export const CocktailItem = (props) => {
	const {
		idDrink: id,
		strDrinkThumb: img,
		strDrink: name,
		strAlcoholic: isAlco,
		strGlass: glassType,
	} = props
	return (
		<article key={id} className="cocktail-item">
			<img src={img} alt="" />
			<div className="info">
				<div className="name">{name}</div>
				<div className="glass-type">{glassType}</div>
				<div className="is-alco">{isAlco}</div>
				<Link to={`/item/${id}`}>
					<button className="btn-details">details</button>
				</Link>
			</div>
		</article>
	)
}
