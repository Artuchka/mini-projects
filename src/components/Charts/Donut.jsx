import FusionCharts from "fusioncharts"
import charts from "fusioncharts/fusioncharts.charts"
import ReactFusioncharts from "react-fusioncharts"
import React from "react"

// Resolves charts dependancy
charts(FusionCharts)

const dataSource = {
	chart: {
		caption: "Market Share of Web Servers",
		plottooltext:
			"<b>$percentValue</b> of web servers run on $label servers",
		showlegend: "1",
		showpercentvalues: "1",
		legendposition: "bottom",
		usedataplotcolorforlabels: "1",
		theme: "fusion",
	},
	data: [
		{
			label: "Apache",
			value: "32647479",
		},
		{
			label: "Microsoft",
			value: "22100932",
		},
	],
}

export const Donut = () => {
	return (
		<ReactFusioncharts
			type="pie2d"
			width="100%"
			height="100%"
			dataFormat="JSON"
			dataSource={dataSource}
		/>
	)
}
