import React from 'react'
import Card from './Card'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import BarChart from './BarChart';
import LineChart from './LineChart';
import LineChart2 from './LineChart2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const Home = ({ data }) => {
  const totalBikeSold = data.reduce((count, item) => {
    return item["Purchased Bike"] === "Yes" ? count + 1 : count;
  }, 0)
  const totalMaleBuyer = data.reduce((count, item) => {
    return item["Gender"] === "Male" && item["Purchased Bike"] === "Yes" ? count + 1 : count;
  }, 0)
  const totalFemaleBuyer = data.reduce((count, item) => {
    return item["Gender"] === "Female" && item["Purchased Bike"] === "Yes" ? count + 1 : count;
  }, 0)


  return (
    <div className=''>
      <div className='flex justify-between'>
        <div className=' p-4 text-2xl'>
          <h2 >Overview</h2>
        </div>
        <div className=' p-4 text-2xl'>
          <h3>Bike Sales Report (1995-2017)</h3>
        </div>
      </div>
      <div className="flex justify-start flex-wrap bg-gray-100">
        <Card
          title="Total Bike Sold"
          text={totalBikeSold}
        />
        <Card
          title="Number of Male Buyer"
          text={totalMaleBuyer}
        />
        <Card
          title="Number Of Female Buyer"
          text={totalFemaleBuyer}
        />
      </div>
      <BarChart data={data} />
      <LineChart data={data}/>
      <LineChart2 data = {data}/>
    </div>
  )
}

export default Home
