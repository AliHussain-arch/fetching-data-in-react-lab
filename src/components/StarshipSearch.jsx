const StarshipSearch = ({search, handleSearch, fetchStarships}) => {
    const handleSubmit = (event) => {
        event.preventDefault();  
        fetchStarships(search);
      };
    return (
        <>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <label>Search Term : </label>
                <input type="text" value={search} onChange={(event) => handleSearch(event.target.value)} required/>
                <button>Search</button>
            </form>
        </>
    );
  }
export default StarshipSearch;