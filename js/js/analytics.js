document.addEventListener('DOMContentLoaded', function() {
    const ctx1 = document.getElementById('monthlySalesChart').getContext('2d');
    const monthlySalesChart = new Chart(ctx1, {
        type: 'line',
        data: getMonthlySalesData(),
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctx2 = document.getElementById('productDistributionChart').getContext('2d');
    const productDistributionChart = new Chart(ctx2, {
        type: 'pie',
        data: getProductDistributionData(),
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });

    window.addEventListener('productsUpdated', function(event) {
        updateCharts(monthlySalesChart, productDistributionChart);
    });

    updateCharts(monthlySalesChart, productDistributionChart);
});

function getMonthlySalesData() {
    const salesData = JSON.parse(localStorage.getItem('salesData')) || {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        data: [500, 700, 800, 600, 900, 1100, 1500, 1200, 1300, 1400, 1600, 2000]
    };
    return {
        labels: salesData.labels,
        datasets: [{
            label: 'Monthly Sales ($)',
            data: salesData.data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };
}

function getProductDistributionData() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const labels = products.map(product => product.name);
    const data = products.map(product => product.price);

    return {
        labels: labels,
        datasets: [{
            label: 'Product Distribution',
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };
}

function updateCharts(monthlySalesChart, productDistributionChart) {
    monthlySalesChart.data = getMonthlySalesData();
    monthlySalesChart.update();

    productDistributionChart.data = getProductDistributionData();
    productDistributionChart.update();
}
