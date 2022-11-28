import React from "react"
import { TbBuildingFactory2 } from "react-icons/tb"
import { AiOutlineLink } from "react-icons/ai"
import { GoLocation } from "react-icons/go"

import "./user-card.scss"

const infolist = [
	{ img: <TbBuildingFactory2 />, title: "coding addict" },
	{ img: <GoLocation />, title: "Sarasota, FL " },
	{
		img: <AiOutlineLink />,
		title: <a href="https://google.com">google.com </a>,
	},
]

export const UserCard = () => {
	return (
		<div className="user-card">
			<div className="card-name">User</div>
			<div className="main-info">
				<img src="/" alt="avatar" className="avatar" />
				<div className="names">
					<div className="name">John Smilga</div>
					<div className="username">@john_smilga</div>
				</div>
				<div className="follow-btn">follow</div>
			</div>
			<div className="desc">
				<div className="job">Creator of Coding Addict</div>
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
