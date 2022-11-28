import React from "react"
import { AiFillBook } from "react-icons/ai"
import { FiUsers, FiUserPlus } from "react-icons/fi"
import { BsCodeSquare } from "react-icons/bs"

import "./quick-stats.scss"

const items = [
	{ img: <AiFillBook />, color: "hotpink", value: "229", prop: "repos" },
	{ img: <FiUsers />, color: "lightgreen", value: "229", prop: "followers" },
	{
		img: <FiUserPlus />,
		color: "blueviolet",
		value: "229",
		prop: "Following",
	},
	{ img: <BsCodeSquare />, color: "orange", value: "229", prop: "Gists" },
]

export const QuickStats = () => {
	return (
		<div className="quick-stat-list">
			{items.map((item, index) => {
				return <Item {...item} key={index} />
			})}
		</div>
	)
}

const Item = (props) => {
	const { img, value, prop, color } = props
	return (
		<article
			className="quick-stat-item"
			style={{
				"--color": color,
			}}
		>
			<div className="image">{img}</div>
			<div className="info">
				<div className="value">{value}</div>
				<div className="prop-name">{prop}</div>
			</div>
		</article>
	)
}
