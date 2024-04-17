import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import IconList from "./utils/constants.js";
import SearchBar from './components/SearchBar.js';

function App() {

  const [height, setHeight] = useState(0);

  function handleChange(e) {
    console.log(e.target.value);
    setHeight(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="py-6 text-3xl" >Pixicons</h1>
      </header>

      <main>
        <SearchBar />
        <label for="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Size</label>
        <input
          id="default-range"
          type="range"
          value={height} 
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          onChange={(e) => handleChange(e)}
        />
        <Grid icons={IconList} height />
      </main>
    </div>
  );
}

export default App;
