import React from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = ({ data }) => {

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
      
        const labels = Object.keys(ageBracketData.purchased).concat(Object.keys(ageBracketData.notPurchased)).filter((v, i, a) => a.indexOf(v) === i).sort();

      
        return {
          labels: labels,
          datasets: [{
            label: 'Purchased',
            data: labels.map(key => ageBracketData.purchased[key] || 0),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: 'Not Purchased',
            data: labels.map(key => ageBracketData.notPurchased[key] || 0),
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ]
        };
      };
      
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'Analysis of Bike Purchases by Age Bracket',
            font: {
              size: 16,
              weight: 'bolder', // Increase font weight
          },
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                const label = tooltipItem.label;
                const datasetLabel = tooltipItem.dataset.label;
                const value = tooltipItem.raw;
                return `${datasetLabel} (${label}): ${value}`;
              }
            }
          }
        }
      };
      
      
    const chartData = processData(data);
    return (
        <div className="chart-container-pie flex justify-center">
            <Pie data={chartData} options={options} />
        </div>
    )
}

export default PieChart
