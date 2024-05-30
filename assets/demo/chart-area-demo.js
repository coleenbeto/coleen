// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
   labels: ["JAN", "FEB", "MAR", "APR"],
    datasets: [{
      data: [39, 76, 46, 66],
      backgroundColor: ['rgba(9, 171, 11, 0.1)',// Green
	'rgba(58, 9, 171, 0.1)',// Violet
	'rgba(210, 226, 14, 0.1)', // Yellow
	'rgba(255, 0, 0, 0.1)', // Red
	'rgba(255, 0, 247, 0.1)', // Pink
	],
    borderColor: ['rgba(9, 171, 11, 0.5)',// Green
	'rgba(58, 9, 171, 0.5)',// Violet
	'rgba(210, 226, 14, 0.5)', // Yellow
	'rgba(255, 0, 0, 0.5)', // Red
	'rgba(255, 0, 247,0.5)', // Pink
	],
    borderWidth: 1
  }]
 },
 
});
