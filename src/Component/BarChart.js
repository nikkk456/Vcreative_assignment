import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({data}) => {
    const processData = (data) => {
        const salaryData = { male: [], female: [], maleNotPurchased: [], femaleNotPurchased: [] };

        data.forEach(item => {
            if (item["Purchased Bike"] === "Yes") {
                if (item["Gender"] === "Male") {
                    salaryData.male.push(item.Income);
                } else if (item.Gender === "Female") {
                    salaryData.female.push(item.Income);
                }
            } else {
                if (item["Gender"] === "Male") {
                    salaryData.maleNotPurchased.push(item.Income);
                } else if (item["Gender"] === "Female") {
                    salaryData.femaleNotPurchased.push(item.Income);
                }
            }
        });

        const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

        return {
            labels: ["Male Purchased", "Female Purchased", "Male Not Purchased", "Female Not Purchased"],
            datasets: [
                {
                    label: 'Average Salary',
                    data: [
                        average(salaryData.male),
                        average(salaryData.maleNotPurchased),
                        average(salaryData.female),
                        average(salaryData.femaleNotPurchased),

                    ],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1,
                    barThickness: 50,
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
                text: 'Average Salary of Bike Purchasers and Non-Purchasers by Gender',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Gender '
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Income'
                }
            }
        }
    };

    const chartData = processData(data);
    return (
        <div className="chart-container" style={{ width: "60%" }}>
            <Bar data={chartData} options={options} />
        </div>
    )
}

export default BarChart
