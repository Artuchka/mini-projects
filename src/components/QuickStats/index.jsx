import React from "react"
import { AiFillBook } from "react-icons/ai"
import { FiUsers, FiUserPlus } from "react-icons/fi"
import { BsCodeSquare } from "react-icons/bs"

import "./quick-stats.scss"
import { useGlobalContext } from "AppProvider"

export const QuickStats = () => {
	const { foundUser } = useGlobalContext()
	const { public_repos, public_gists, followers, following } = foundUser

	const items = [
		{
			img: <AiFillBook />,
			color: "hotpink",
			value: public_repos,
			prop: "Repos",
		},
		{
			img: <FiUsers />,
			color: "lightgreen",
			value: followers,
			prop: "Followers",
		},
		{
			img: <FiUserPlus />,
			color: "blueviolet",
			value: following,
			prop: "Following",
		},
		{
			img: <BsCodeSquare />,
			color: "orange",
			value: public_gists,
			prop: "Gists",
		},
	]

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
