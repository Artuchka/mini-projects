import { useGlobalContext } from "AppProvider"
import React from "react"

import "./followers-card.scss"

export const FollowersCard = () => {
	const { followers } = useGlobalContext()
	return (
		<div className="followers-card">
			<div className="card-name">followers</div>
			<div className="users-list">
				{followers?.map((user, index) => {
					return <UserItem {...user} key={index} />
				})}
			</div>
		</div>
	)
}
const UserItem = (props) => {
	const { avatar_url, login: name, html_url: url } = props
	return (
		<div className="user-list-item">
			<img src={avatar_url} alt="" />
			<div className="info">
				<div className="name">{name}</div>
				<a className="link" href={url}>
					{url}
				</a>
			</div>
		</div>
	)
}
