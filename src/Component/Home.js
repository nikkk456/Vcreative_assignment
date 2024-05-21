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
      <div className='flex justify-between flex-wrap'>
        <div className=' p-4 text-2xl'>
          <h2 className=' font-bold ' >Overview</h2>
        </div>
        <div className=' p-4 text-2xl'>
          <h3>Bike Sales Report (1995-2017)</h3>
        </div>
      </div>
      <div className="flex justify-evenly flex-wrap bg-gray-100">
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white m-4 border-2" style={{ width: "270px", borderColor: "#952828" }} >
          <div className="px-6 py-4">
            <div className="font-bold text-lg mb-2">
              <i className="fas fa-chart-line mr-2"></i>
              Total Bike Sold
            </div>
            <div className='flex justify-between'>
              <p className="text-gray-700 font-semibold text-lg">
                {totalBikeSold}
              </p>
              <div className="text-sm bg-green-100 text-green-800 font-semibold px-2.5 py-0.5 rounded">
                +15%
              </div>
            </div>
            <p className=' text-sm'>
              (All Regions)
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white m-4 border-2" style={{ width: "270px", borderColor: "darkcyan" }} >
          <div className="px-6 py-4">
            <div className="font-bold text-lg mb-2">
              <i className="fas fa-male mr-2"></i>
              Total Male Buyer
            </div>
            <div className='flex justify-between'>
              <p className="text-gray-700 font-semibold text-lg">
                {totalMaleBuyer}
              </p>
              <div className="text-sm bg-red-100 text-red-800 font-semibold px-2.5 py-0.5 rounded">
                -5%
              </div>
            </div>
            <p className=' text-sm'>
              (All Regions)
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white m-4 border-2" style={{ width: "270px", borderColor: "deeppink" }} >
          <div className="px-6 py-4">
            <div className="font-bold text-lg mb-2">
              <i className="fas fa-female mr-2"></i>
              Total Female Buyer</div>
            <div className='flex justify-between'>
              <p className="text-gray-700 font-semibold text-lg">
                {totalFemaleBuyer}
              </p>
              <div className="text-sm bg-green-100 text-green-800 font-semibold px-2.5 py-0.5 rounded">
                +35%
              </div>
            </div>
            <p className=' text-sm'>
              (All Regions)
            </p>
          </div>
        </div>
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
