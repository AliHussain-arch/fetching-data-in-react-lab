import StarshipCard from './StarshipCard';

const StarshipList = ({ starships }) => {
    if (!starships || starships.length === 0) {
        return (
            <>
                <h2>Starships</h2>
                <p>No starships available.</p>
            </>
        );
    }
    return (
        <>
            <h2>Starships</h2>
            <p>Number of results: {starships.length}</p>
            <section>
                <ul>
                    {starships.map((starship, index) => (
                        <li key={index}>
                            <StarshipCard starship={starship} />
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default StarshipList;
