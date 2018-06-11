var cal = new CalHeatMap();
cal.init({
        itemSelector: "#cal-heatmap",
        data: [	{date: 1528691203, value: 0},
				{date: 1527913602, value: 1},
				{date: 1528000002, value: 0}],
		range: 2, legend: [0, 1],
			legendColors: {
			min: "#efefef",
			max: "steelblue",
			empty: "white"
			// Will use the CSS for the missing keys
		},
        dataType: "json",
        range: 25,
        domain: "month",
        subDomain: "x_day",
        cellSize: 30, legendCellSize: 15,
        cellPadding: 3, legendCellPadding: 3,
        domainGutter: 10,
        subDomainTextFormat: "%d",
        displayLegend: true,
        domainDynamicDimension: false,
        verticalOrientation: true,
        legendVerticalPosition: "top",
      	nextSelector: "#cal-heatmap-next",
      	previousSelector: "#cal-heatmap-previous",
      	itemNamespace: "domainDynamicDimension",
        label: {
                 position: "left",
                 rotation: "left"
            },
        onClick: function(date, nb) {
          console.log("you clicked on " + date);
      	}
});