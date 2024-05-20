import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, zoomPlugin);


const LineChart2 = ({data}) => {
    const processData = (data) => {
        const ageBracketData = {
            purchased: {},
            notPurchased: {}
        };

        data.forEach(item => {
            const ageBracket = item["Age-Bracket"];
            const purchased = item["Purchased Bike"] === "Yes";

            if (purchased) {
                if (!ageBracketData.purchased[ageBracket]) {
                    ageBracketData.purchased[ageBracket] = 0;
                }
                ageBracketData.purchased[ageBracket]++;
            } else {
                if (!ageBracketData.notPurchased[ageBracket]) {
                    ageBracketData.notPurchased[ageBracket] = 0;
                }
                ageBracketData.notPurchased[ageBracket]++;
            }
        });

        const allAgeBrackets = Object.keys(ageBracketData.purchased).concat(Object.keys(ageBracketData.notPurchased)).filter((v, i, a) => a.indexOf(v) === i).sort();

        return {
            labels: allAgeBrackets,
            datasets: [
                {
                    label: 'Purchased',
                    data: allAgeBrackets.map(key => ageBracketData.purchased[key] || 0),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: false,
                    tension: 0, // Ensure straight lines
                    pointRadius: 5,
                    pointHoverRadius: 8,
                },
                {
                    label: 'Not Purchased',
                    data: allAgeBrackets.map(key => ageBracketData.notPurchased[key] || 0),
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    fill: false,
                    tension: 0, // Ensure straight lines
                    pointRadius: 5,
                    pointHoverRadius: 8,
                }
            ]
        };
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Analysis of Bike Purchases by Age Bracket',
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
                    text: 'Age Bracket'
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
        <div className="chart-container" style={{width:"60%"}}>
            <Line data={chartData} options={options} />
        </div>
    )
}

export default LineChart2
