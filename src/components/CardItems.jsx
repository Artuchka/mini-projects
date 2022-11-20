import React from "react"

export const CardItems = ({ imgSrc, name, age }) => {
	return (
		<div className="card__item">
			<img src={imgSrc} alt="avatar" className="avatar" />
			<div className="info">
				<div className="name">{name}</div>
				<div className="age">{age} years</div>
			</div>
		</div>
	)
}
