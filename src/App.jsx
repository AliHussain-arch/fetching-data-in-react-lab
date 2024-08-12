import { useState } from 'react';
import { useEffect } from 'react'
import './App.css'
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import fetchStarships from './services/starshipService';
// src/App.jsx
const App = () => {
 const [starships,setStarships] = useState([]);
 const [search,setSearch] = useState('');
 const [loading,setLoading] = useState(false);

 const handleSearch = (value) => {
   setSearch(value)
 };
  useEffect(() => {fetchStarships('',setStarships,setLoading);}, []);
  return (
    <>
      <h1>Stars Wars API</h1>
      <StarshipSearch search={search} handleSearch={handleSearch} fetchStarships={fetchStarships} setStarships={setStarships} setLoading={setLoading}/>
      <StarshipList starships={starships} loading={loading}/>
    </>
    
  );
}

export default App
