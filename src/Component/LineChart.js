import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, zoomPlugin);

const LineChart = ({ data }) => {

    const processData = (data) => {
        const commuteData = {
            purchased: {},
            notPurchased: {}
        };

        data.forEach(item => {
            const commuteDistance = item["Commute Distance"];
            const purchased = item["Purchased Bike"] === "Yes";

            if (purchased) {
                if (!commuteData.purchased[commuteDistance]) {
                    commuteData.purchased[commuteDistance] = 0;
                }
                commuteData.purchased[commuteDistance]++;
            } else {
                if (!commuteData.notPurchased[commuteDistance]) {
                    commuteData.notPurchased[commuteDistance] = 0;
                }
                commuteData.notPurchased[commuteDistance]++;
            }
        });

        return {
            labels: Object.keys(commuteData.purchased).concat(Object.keys(commuteData.notPurchased)).filter((v, i, a) => a.indexOf(v) === i).sort(),
            datasets: [
                {
                    label: 'Purchased',
                    data: Object.keys(commuteData.purchased).map(key => commuteData.purchased[key] || 0),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: false,
                    tension: 0,
                    pointRadius: 5,
                    pointHoverRadius: 8,
                },
                {
                    label: 'Not Purchased',
                    data: Object.keys(commuteData.notPurchased).map(key => commuteData.notPurchased[key] || 0),
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    fill: false,
                    tension: 0,
                    pointRadius: 5,
                    pointHoverRadius: 8,
                }
            ]
        };
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Bike Purchases by Commute Distance',
                font: {
                    size: 16,
                    weight: 'bolder', // Increase font weight
                },
            },
            zoom: {
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true
                    },
                    mode: 'xy',
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Commute Distance'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Number of People'
                }
            }
        }
    };

    const chartData = processData(data);

    return (
        <div className="chart-container-line">
            <Line data={chartData} options={options} />
        </div>
    )
}

export default LineChart
