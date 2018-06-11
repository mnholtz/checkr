data = {"1528691203": 0, "1527913602": 1, "1528000002": 2};

var cal = new CalHeatMap();
cal.init({
        itemSelector: "#cal-heatmap",
        data: data,
		legend: [1, 2, 3],
		legendColors: {
			min: "#efefef",
			max: "steelblue",
			empty: "white"
			// Will use the CSS for the missing keys
		},
        dataType: "json",
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