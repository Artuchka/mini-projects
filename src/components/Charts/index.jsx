import React from "react"
import { Bars } from "./Bars"
import { Donut } from "./Donut"
import { Pie } from "./Pie"
import { Plot } from "./Plot"

import "./charts.scss"

export const Charts = () => {
	return (
		<div className="charts">
			<Donut />
			<Plot />
			<Pie />
			<Bars />
		</div>
	)
}
