import React from "react"

import ReactFC from "react-fusioncharts"
import FusionCharts from "fusioncharts"
import Column2D from "fusioncharts/fusioncharts.charts"
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion"

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme)

const chartData = [
	{
		label: "Venezuela",
		value: "290",
	},
	{
		label: "Saudi",
		value: "260",
	},
	{
		label: "Canada",
		value: "180",
	},
]

const chartConfigs = {
	type: "column2d", // The chart type
	width: "100%", // Width of the chart
	height: "100%", // Height of the chart
	dataFormat: "json",
	dataSource: {
		chart: {
			caption: "Most Popular",
			xAxisName: "Repos",
			yAxisName: "Stars",
			numberSuffix: "",
			theme: "fusion",
		},
		data: chartData,
	},
}

export const Plot = ({ popularStats }) => {
	popularStats.length = 5
	const newData = popularStats.map((stat) => ({
		label: stat.name,
		value: stat.stars,
	}))
	return (
		<ReactFC
			{...chartConfigs}
			dataSource={{ ...chartConfigs.dataSource, data: newData }}
		/>
	)
}
