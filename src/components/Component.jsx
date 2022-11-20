import React from "react"
import "./bday.scss"
import { useState } from "react"
import { CardItems } from "./CardItems"

export const Component = () => {
	const [ppl, setPpl] = useState([
		{ imgSrc: "https://i.pravatar.cc/300", name: "Bertie Yates", age: 29 },
		{
			imgSrc: "https://i.pravatar.cc/301",
			name: "Hester Hogan",
			age: 32,
		},
		{ imgSrc: "https://i.pravatar.cc/302", name: "Larry Little", age: 312 },
		{
			imgSrc: "https://i.pravatar.cc/303",
			name: "Sean Walsh",
			age: 64,
		},
		{
			imgSrc: "https://i.pravatar.cc/304",
			name: "Lola Gardner",
			age: 43,
		},
	])
	return (
		<div className="card">
			<h1 className="card__title">{ppl.length} birthdays today</h1>
			<div className="card__list">
				{ppl.map((data, ind) => (
					<CardItems key={ind} {...data} />
				))}
			</div>

			<button
				className="card__btn"
				onClick={() => {
					setPpl([])
				}}
			>
				Clear All
			</button>
		</div>
	)
}
