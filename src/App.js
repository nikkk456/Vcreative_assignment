import './App.css';
import Home from './Component/Home';
import data from './Dataset.json';

function App() {
  return (
    <>
    <center><h1 className='text-white mt-5 mb-2 text-4xl font-bold'>Dashboard</h1></center>
    <div className='bg-white mb-9 mx-9 rounded-xl'>
      <Home data = {data}/>
    </div>
    </>
  );
}

export default App;
