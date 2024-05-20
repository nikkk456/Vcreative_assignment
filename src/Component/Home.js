import React from 'react'
import Card from './Card'
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';


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
          <h2 className=' font-bold ' >Overview</h2>
        </div>
        <div className=' p-4 text-2xl'>
          <h3>Bike Sales Report (1995-2017)</h3>
        </div>
      </div>
      <div className="flex justify-start flex-wrap bg-gray-100">
        <Card title="Total Bike Sold" text={totalBikeSold} borderColor="rgba(75, 192, 192, 1)" />
        <Card title="Number of Male Buyer" text={totalMaleBuyer} />
        <Card title="Number Of Female Buyer" text={totalFemaleBuyer} />
      </div>
      <div className='flex justify-between flex-wrap my-2 mx-2'>
        <LineChart data={data} />
        <PieChart data={data} />
      </div>
      <BarChart data={data} />
    </div>
  )
}

export default Home
