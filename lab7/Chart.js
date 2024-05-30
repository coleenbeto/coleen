Chart.js
const body = document.body;
body.style.backgroundColor = 'rgba(26, 117, 255, 0.15)'; 
body.style.backgroundImage = 'https://img.freepik.com/free-photo/blue-smoke-background-textured-wallpaper-high-resolution_53876-128239.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1713916800&semt=ais';
const sampleData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [{
    label: 'Sample Data',
    data: [30, 89, 100, 56, 26, 58, 21, 67, 12, 43, 76, 54],
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
};

const ctx = document.getElementById('myChart').getContext('2d');
let currentChart;

function renderChart(type) {
  if (currentChart) {
    currentChart.destroy();
  }
  
  currentChart = new Chart(ctx, {
    type: type,
    data: sampleData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
function changeChartType(type) {
  renderChart(type);
}
renderChart('bar')
