import { useGlobalContext } from "AppProvider"
import React from "react"

import "./followers-card.scss"

export const FollowersCard = () => {
	const { users } = useGlobalContext()
	return (
		<div className="followers-card">
			<div className="card-name">followers</div>
			<div className="users-list">
				{users?.map((user, index) => {
					return <UserItem {...user} key={index} />
				})}
			</div>
		</div>
	)
}
const UserItem = (props) => {
	const { img, name, url } = props
	return (
		<div className="user-list-item">
			name
			<img src="/" alt="" />
			<div className="info">
				<div className="name">{name}</div>
				<a href={url}>{url}</a>
			</div>
		</div>
	)
}
