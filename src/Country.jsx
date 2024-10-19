import { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  console.log(country);
  const { name, flags } = country;

  const [Visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(true);
  };
  return (
    <div className="country">
      <h5>Name: {name.common}</h5>
      <img src={flags.png} alt="" />
      <button onClick={handleVisited}>Visited</button>
    </div>
  );
};

export default Country;
