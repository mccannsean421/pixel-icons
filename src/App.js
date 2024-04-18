import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import IconList from "./utils/constants.js";
import SearchBar from './components/SearchBar.js';
import {useSelector, useDispatch} from "react-redux";
import { updateSize } from './slices/iconSlice.js';

function App() {

  const size = useSelector((state) => state.icon.size);
  const dispatch = useDispatch();

  function handleChange(e) {
    const newValue = e.target.value
    dispatch(updateSize(newValue))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="py-6 text-3xl" >Pixicons</h1>
      </header>

      <main>
        <SearchBar />
        
        <div className="grid grid-cols-3 p-6">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <label for="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Size: {size}px</label>
          <input
            id="default-range"
            type="range"
            value={size} 
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            onChange={(e) => handleChange(e)}
          />
          </div>
        </div>
        <Grid icons={IconList} height />
      </main>
    </div>
  );
}

export default App;
