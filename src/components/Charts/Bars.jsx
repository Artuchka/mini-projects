import React from "react"

import FusionCharts from "fusioncharts"
import charts from "fusioncharts/fusioncharts.charts"
import ReactFusioncharts from "react-fusioncharts"
export const Bars = () => {
	return (
		<ReactFusioncharts
			type="bar2d"
			width="100%"
			height="100%"
			dataFormat="JSON"
			dataSource={dataSource}
		/>
	)
}

// Resolves charts dependancy
charts(FusionCharts)

const dataSource = {
	chart: {
		caption: "Lead sources by industry",
		yaxisname: "Number of Leads",
		aligncaptionwithcanvas: "0",
		plottooltext: "<b>$dataValue</b> leads received",
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
