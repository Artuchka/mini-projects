import { Navbar } from "components/Navbar"
import { Searchbar } from "components/Searchbar"
import React from "react"
import { UserCard } from "components/UserCard"
import { FollowersCard } from "components/FollowersCard"
import { Charts } from "components/Charts"

import "./Dashboard.scss"
import { QuickStats } from "components/QuickStats"

export const Dashboard = () => {
	return (
		<main className="main">
			<Navbar />
			<div className="dashboard">
				<Searchbar />
				<QuickStats />
				<div className="cards">
					<UserCard />
					<FollowersCard />
				</div>
				<Charts />
			</div>
		</main>
	)
}
