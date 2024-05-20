import React from 'react'
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import FilterRegion from './FilterRegion';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({data}) => {
    const [region, setRegion] = useState('');
    const processData = (data, regionFilter) => {
        const filteredData = regionFilter ? data.filter(item => item.Region === regionFilter) : data;
      
        const salaryData = {
          male: { purchased: [], notPurchased: [] },
          female: { purchased: [], notPurchased: [] }
        };
      
        filteredData.forEach(item => {
          const gender = item.Gender.toLowerCase();
          const purchased = item["Purchased Bike"] === "Yes" ? 'purchased' : 'notPurchased';
          salaryData[gender][purchased].push(item.Income);
        });
      
        const calculateAverage = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
      
        return {
          labels: ['Male Purchased', 'Male Not Purchased', 'Female Purchased', 'Female Not Purchased'],
          datasets: [
            {
              label: 'Average Salary',
              data: [
                calculateAverage(salaryData.male.purchased),
                calculateAverage(salaryData.male.notPurchased),
                calculateAverage(salaryData.female.purchased),
                calculateAverage(salaryData.female.notPurchased)
              ],
              backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)'
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
              ],
              barThickness: 50,
              borderWidth: 1
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
            text: 'Average Salary of Bike Purchasers by Gender and Purchase Status',
            font: {
                size:16,
              weight: 'bold',
            },
          }
        }
      };
      
    const regions = ['Europe', 'Pacific', 'North America']; // Example regions, adjust as necessary
      

    const chartData = processData(data, region);
    return (
        <div className='mx-2'>
      <FilterRegion regions={regions} onSelectRegion={setRegion} />
      <div className="chart-container" style={{ position: 'relative', height: '400px', width: '600px' }}>
        <Bar data={chartData} options={options} />
      </div>
    </div>
    )
}

export default BarChart
