var cal = new CalHeatMap();
cal.init({
        itemSelector: "#cal-heatmap",
        data: {},
		legend: [1, 2, 3, 4],
		legendColors: {
			min: "#ededed",
			max: "#ededed",
			empty: "white"
		},
		range: 2,
        dataType: "json",
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
      	},
        afterLoadData: function (timestamps) {
          var offset = new Date().getTimezoneOffset() * 60;
          var results = {};
          for (var timestamp in timestamps) {
            var commitCount = timestamps[timestamp];
            timestamp = parseInt(timestamp, 10);
            console.log(timestamp)
            results[timestamp + offset] = commitCount;
          };
          return results;
        }

});

// Convert strings to date objects
function date_to_epoch(key) {
    var epoch_seconds = new Date(key).getTime();
    return Math.floor (epoch_seconds / 1000);
}
