import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedFlags }) => {
  console.log(country);
  const { name, flags } = country;

  const [Visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(true);
  };
  return (
    <div className={`country ${Visited && "visited"}`}>
      <h5>Name: {name.common}</h5>
      <img src={flags.png} alt="" />
      <button onClick={handleVisited}>Visited</button>
      <button onClick={() => handleVisitedFlags(country)}>Add Flag</button>
    </div>
  );
};

export default Country;
