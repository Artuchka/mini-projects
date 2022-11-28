import React from "react"
import { Bars } from "./Bars"
import { Donut } from "./Donut"
import { Pie } from "./Pie"
import { Plot } from "./Plot"

import "./charts.scss"
import { useGlobalContext } from "AppProvider"

export const Charts = () => {
	const { repos } = useGlobalContext()
	const getLangStats = async (url) => {
		try {
			const resp = await fetch(url)
			const data = await resp.json()
			// console.log(data)
			return await data
		} catch (error) {
			return []
		}
	}
	const stats = repos.map((rep) => {
		const {
			languages_url,
			forks_count: forks,
			stargazers_count: stars,
			name,
		} = rep
		// const langStats = getLangStats(languages_url)
		return { languages_url, stars, forks, name }
	})

	const forkStats = stats
		.map(({ name, forks }) => ({ name, forks }))
		.filter(({ forks }) => forks > 0)
		.sort((a, b) => {
			if (a.forks > b.forks) return -1
			if (a.forks < b.forks) return 1
			return 0
		})
	const popularStats = stats
		.map(({ name, stars }) => ({ name, stars }))
		.filter(({ stars }) => stars > 0)
		.sort((a, b) => {
			if (a.stars > b.stars) return -1
			if (a.stars < b.stars) return 1
			return 0
		})

	console.log(forkStats)
	return (
		<div className="charts">
			<Donut />
			<Plot popularStats={popularStats} />
			<Pie />
			<Bars forkStats={forkStats} />
		</div>
	)
}
