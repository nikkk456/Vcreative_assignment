import './App.css';
import Home from './Component/Home';
import data from './Dataset.json';

function App() {
  return (
    <div className='bg-white my-9 mx-5 rounded-xl'>
      <Home data = {data}/>
    </div>
  );
}

export default App;
