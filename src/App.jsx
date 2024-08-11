import { useState } from 'react';
import { useEffect } from 'react'
import './App.css'
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
// src/App.jsx
const BASE_URL = 'https://swapi.dev/api/';
const App = () => {
 const [starships,setStarships] = useState([]);
 const [search,setSearch] = useState('');
 const handleSearch = (value) => {
   setSearch(value)
 };
 const [loading,setLoading] = useState(false);
  async function fetchStarships (term) {
    const starshipsResponse = await fetch(`${BASE_URL}starships/?search=${encodeURIComponent(term)}`);
    const starshipsList = await starshipsResponse.json();
    setStarships(starshipsList.results);    
    setLoading(false);
  }
  useEffect(() => {fetchStarships();}, []);
  return (
    <>
      <h1>Stars Wars API</h1>
      <StarshipSearch search={search} handleSearch={handleSearch} fetchStarships={fetchStarships} setLoading={setLoading}/>
      <StarshipList starships={starships} loading={loading}/>
    </>
    
  );
}

export default App
