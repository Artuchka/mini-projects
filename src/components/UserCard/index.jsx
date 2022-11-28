import React from "react"
import { TbBuildingFactory2 } from "react-icons/tb"
import { AiOutlineLink } from "react-icons/ai"
import { GoLocation } from "react-icons/go"

import "./user-card.scss"
import { useGlobalContext } from "AppProvider"

export const UserCard = () => {
	const { foundUser } = useGlobalContext()

	const {
		avatar_url,
		bio,
		blog,
		company,
		html_url,
		location,
		name,
		twitter_username,
	} = foundUser

	const infolist = [
		{ img: <TbBuildingFactory2 />, title: company },
		{ img: <GoLocation />, title: location },
		{
			img: <AiOutlineLink />,
			title: <a href={blog}>{blog} </a>,
		},
	]
	return (
		<div className="user-card">
			<div className="card-name">User</div>
			<div className="main-info">
				<img src={avatar_url} alt="avatar" className="avatar" />
				<div className="names">
					<div className="name">{name}</div>
					<div className="username">@{twitter_username}</div>
				</div>
				<a href={html_url} target="_blank" className="follow-btn">
					follow
				</a>
			</div>
			<div className="desc">
				<div className="bio">{bio}</div>
				<div className="info-list">
					{infolist.map((item, index) => {
						const { img, title } = item
						return (
							<div key={index} className="info-list-item">
								<div className="img">{img}</div>
								<span className="title">{title}</span>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
