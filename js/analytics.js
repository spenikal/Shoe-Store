document.addEventListener('DOMContentLoaded', function() {
    // Sample data for Monthly Sales Chart
    const monthlySalesData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Monthly Sales ($)',
            data: [500, 700, 800, 600, 900, 1100, 1500, 1200, 1300, 1400, 1600, 2000],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    // Sample data for Product Distribution Chart
    const productDistributionData = {
        labels: ['Nike Air Max', 'Adidas UltraBoost', 'Puma Running Shoes', 'Reebok Classic', 'New Balance 990v5'],
        datasets: [{
            label: 'Product Distribution',
            data: [20, 25, 15, 10, 30],
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

    // Monthly Sales Chart
    const ctx1 = document.getElementById('monthlySalesChart').getContext('2d');
    const monthlySalesChart = new Chart(ctx1, {
        type: 'line',
        data: monthlySalesData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Product Distribution Chart
    const ctx2 = document.getElementById('productDistributionChart').getContext('2d');
    const productDistributionChart = new Chart(ctx2, {
        type: 'pie',
        data: productDistributionData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });
});
