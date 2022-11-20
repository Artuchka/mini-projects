import React from "react"
import { useState } from "react"
import { Card } from "./Card"

export const Component = () => {
	const [cards, setCards] = useState([
		{
			id: "1",
			imgSrc: "https://placekitten.com/640/360",
			title: "Best Of Paris In 7 Days Tour",
			text: `Paris is synonymous with the finest things that culture
      can offer — in art, fashion, food, literature, and
      ideas. On this tour, your Paris-savvy Rick Steves guide
      will immerse you in the very best of the City of Light:
      the masterpiece-packed Louvre and Orsay museums,
      resilient Notre-Dame Cathedral, exquisite
      Sainte-Chapelle, and extravagant Palace of Versailles.
      You'll also enjoy guided neighborhood walks through the
      city's historic heart as well as quieter moments to slow
      down and savor the city's intimate cafés, colorful
      markets, and joie de vivre. Join us for the Best of
      Paris in 7 Days!`,
		},
		{
			id: "2",
			imgSrc: "https://placekitten.com/640/260",
			title: "Best Of Paris In 7 Days Tour",
			text: `Paris is synonymous with the finest things that culture
      can offer — in art, fashion, food, literature, and
      ideas. On this tour, your Paris-savvy Rick Steves guide
      will immerse you in the very best of the City of Light:
      the masterpiece-packed Louvre and Orsay museums,
      resilient Notre-Dame Cathedral, exquisite
      Sainte-Chapelle, and extravagant Palace of Versailles.
      You'll also enjoy guided neighborhood walks through the
      city's historic heart as well as quieter moments to slow
      down and savor the city's intimate cafés, colorful
      markets, and joie de vivre. Join us for the Best of
      Paris in 7 Days!`,
		},
	])

	function deleteCard(id) {
		setCards((prev) => prev.filter((card) => id !== card.id))
	}

	return (
		<div>
			<h1 className="title">our tours</h1>

			<div className="cards-list">
				{cards.map((card) => (
					<Card
						{...card}
						key={card.id}
						handleDelete={deleteCard}
					></Card>
				))}
			</div>
		</div>
	)
}
