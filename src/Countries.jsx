import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag.flags.png];
    setVisitedFlags(newVisitedFlags);
    console.log(flag.flags.png);
  };

  return (
    <div>
      <div className="flag_container">
        <h3>Flags</h3>

        <div>
          {visitedFlags.map((flag) => (
            <img src={flag}></img>
          ))}
        </div>
      </div>
      <h3>Countries:{countries.length}</h3>
      <div className="country_container">
        {countries.map((country) => (
          <Country
            country={country}
            handleVisitedFlags={handleVisitedFlags}
            key={country.cca3}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
