const StarshipCard = ({ starship }) => {
  return (
      <li>
          <h2>{starship.name}</h2>
          <p><b>Class:</b> {starship.starship_class}</p>
          <p><b>Manufacturer:</b> {starship.manufacturer}</p>
          <p><b>Model:</b> {starship.model}</p>
      </li>
  );
}

export default StarshipCard;
