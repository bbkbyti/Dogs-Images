
import './App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import AllDogs from './components/AllDogs';
import OneDog from './components/OneDog'

function App() {
  const [breeds, setBreeds] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios('https://dog.ceo/api/breeds/list/all');
        setBreeds(Object.keys(response.data.message));
      } catch (e) {
        console.log(e)
      }
    }
    fetchData();
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AllDogs breeds={breeds} />} />
        <Route exact path='/:breed' element={<OneDog />} />
      </Routes>
    </div>
  );
}

export default App;
