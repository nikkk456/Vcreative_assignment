import React from 'react'
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import FilterRegion from './FilterRegion';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
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
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },

    }
  };

  const regions = ['Europe', 'Pacific', 'North America']; // Example regions, adjust as necessary


  const chartData = processData(data, region);
  return (
    <div className='mx-2'>
      <div className='flex flex-wrap justify-around rounded-md p-2 text-white' style={{ backgroundColor: "#000000b3" }}>
        <h3 className=' text-lg '>Average Salary of Bike purchaser by Gender and Purchase status</h3>
        <FilterRegion regions={regions} onSelectRegion={setRegion} />
      </div>
      <div className="chart-container-bar">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  )
}

export default BarChart
