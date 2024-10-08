const StarshipSearch = ({search, handleSearch, fetchStarships, setLoading, setStarships}) => {
    const handleSubmit = (event) => {
        event.preventDefault(); 
        setLoading(true); 
        fetchStarships(search, setStarships, setLoading);
      };
    return (
        <>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <label><b>Search Term :</b></label>
                <input type="text" value={search} onChange={(event) => handleSearch(event.target.value)} required/>
                <button>Search</button>
            </form>
        </>
    );
  }
export default StarshipSearch;