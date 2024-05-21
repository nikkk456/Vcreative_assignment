import './App.css';
import Home from './Component/Home';
import data from './Dataset.json';

function App() {
  return (
    <>
    <center><h1 className='text-black mt-4 mb-2 text-4xl font-bold'>DASHBOARD</h1></center>
    <div className='bg-white mb-9 mx-9 rounded-xl border-2' style={{boxShadow:"0px 0px 8px 2px grey"}}>
      <Home data = {data}/>
    </div>
    </>
  );
}

export default App;
