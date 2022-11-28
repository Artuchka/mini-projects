import React from "react"

import FusionCharts from "fusioncharts"
import charts from "fusioncharts/fusioncharts.charts"
import ReactFusioncharts from "react-fusioncharts"

// Resolves charts dependancy
charts(FusionCharts)

const dataSrc = {
	chart: {
		caption: "Times Forked  by Repos",
		yaxisname: "Number of Forks",
		aligncaptionwithcanvas: "0",
		plottooltext: "forked <b>$dataValue</b> times",
		theme: "fusion",
	},
	data: [
		{
			label: "Travel & Leisure",
			value: "41",
		},
		{
			label: "Advertising/Marketing/PR",
			value: "39",
		},
		{
			label: "Other",
			value: "38",
		},
	],
}

export const Bars = ({ forkStats }) => {
	forkStats.length = 10
	const newData = forkStats.map((item) => ({
		label: item.name,
		value: item.forks,
	}))
	return (
		<ReactFusioncharts
			type="bar2d"
			width="100%"
			height="100%"
			dataFormat="JSON"
			dataSource={{ ...dataSrc, data: newData }}
		/>
	)
}
