export const createChart = () => {
    let userChart = document.querySelector('#userChart');
    return new Chart(userChart, {
        type: 'bar',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'user',
                data: [15, 12, 19, 20, 11, 40, 10],
                barThickness: 15,
                backgroundColor: '#6366F1',
                borderRadius: 1.2,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { font: { size: 14 } }
                },
                y: {
                    beginAtZero: true,
                    grid: { display: false },
                    ticks: { stepSize: 2 }
                }
            }

        }
    })
}
export const createCircleChart = () => {
    let circleBox = document.querySelector('.circle-chart');
    return new Chart(circleBox, {
        type: 'pie',
        data: {
            labels: ['Desktop', 'Tablet', 'Phone'],
            datasets: [{
                data: [63, 15, 22],
                backgroundColor: ['#6366F1', '#F79007', '#11B981'],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            callbacks: {
                label: function (context) {
                    let label = context.label || '';
                    let value = context.raw;
                    return `${label}: ${value}%`;
                }
            }

}})

}
