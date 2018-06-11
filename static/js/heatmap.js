data = {"1528691203": 3, "1528737833": 1, "1528000002": 0}

var cal = new CalHeatMap();
cal.init({
        itemSelector: "#cal-heatmap",
        data: data,
		range: 2, legend: [1, 2, 3],
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
        legendOrientation: "vertical",
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

// Convert strings to date objects
function date_to_epoch(key) {
    var epoch_seconds = new Date(key).getTime();
    return Math.floor (epoch_seconds / 1000);
}