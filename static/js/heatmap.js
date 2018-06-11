var cal = new CalHeatMap();
cal.init({
        itemSelector: "#cal-heatmap",
        domain: "month",
        subDomain: "x_day",
        cellSize: 30, legendCellSize: 15,
        cellPadding: 3, legendCellPadding: 3,
        domainGutter: 10,
        subDomainTextFormat: "%d",
        domainDynamicDimension: false,
        verticalOrientation: true,
        tooltip: true,
        legendVerticalPosition: "left",
      	nextSelector: "#cal-heatmap-next",
      	previousSelector: "#cal-heatmap-previous",
      	itemNamespace: "domainDynamicDimension",
        label: {
                 position: "left"
            },
        onClick: function(date, nb) {
          console.log("you clicked on " + date);
      		$("#cal-heatmap").html("You just clicked <br/>on <b>" +
      			date + "</b> <br/>with <b>" +
      			(nb === null ? "unknown" : nb) + "</b> items"
      		);
      	}
});