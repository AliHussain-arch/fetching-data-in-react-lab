const BASE_URL = 'https://swapi.dev/api/';
async function fetchStarships (term, setStarships, setLoading) {
    const starshipsResponse = await fetch(`${BASE_URL}starships/?search=${encodeURIComponent(term)}`);
    const starshipsList = await starshipsResponse.json();
    setStarships(starshipsList.results);    
    setLoading(false);
  }
export default fetchStarships;