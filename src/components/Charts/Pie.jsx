import React from "react"

import FusionCharts from "fusioncharts"
import charts from "fusioncharts/fusioncharts.charts"
import ReactFusioncharts from "react-fusioncharts"

export const Pie = () => {
	return (
		<ReactFusioncharts
			type="doughnut2d"
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
		caption: "Android Distribution for our app",
		subcaption: "For all users in 2017",
		showpercentvalues: "1",
		defaultcenterlabel: "Android Distribution",
		aligncaptionwithcanvas: "0",
		captionpadding: "0",
		decimals: "1",
		plottooltext:
			"<b>$percentValue</b> of our Android users are on <b>$label</b>",
		centerlabel: "# Users: $value",
		theme: "fusion",
	},
	data: [
		{
			label: "Ice Cream Sandwich",
			value: "1000",
		},
		{
			label: "Jelly Bean",
			value: "5300",
		},
	],
}
