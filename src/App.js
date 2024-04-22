import './App.css';
import Grid from './components/Grid';
import SearchBar from './components/SearchBar.js';
import {useSelector, useDispatch} from "react-redux";
import { updateSize, handleColourChange } from './slices/iconSlice.js';
import { TwitterPicker } from 'react-color';
import { useState, useEffect } from 'react';

function App() {
  const size = useSelector((state) => state.icon.size);
  const iconColor = useSelector(state => state.icon.iconColor);
  const iconList = useSelector(state => state.icon.iconList);
  const dispatch = useDispatch();

  function handleSizeChange(e) {
    const newValue = parseInt(e.target.value)
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
              onChange={(e) => handleSizeChange(e)}
            />
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <label for="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color: {iconColor}</label>
            <TwitterPicker
              color={ iconColor }
              onChangeComplete={ (color) => dispatch(handleColourChange(color)) }
            />
          </div>
        </div>
        { !!iconList && (
          <Grid icons={iconList} height />
        ) }
        
      </main>
    </div>
  );
}

export default App;
