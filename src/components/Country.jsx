import React from "react";
import { Link } from "react-router-dom";

const Country = ({ flags, name, population, region, subregion }) => {
  return (
    <div className="country">
      <Link to={`/${name.common}`}>
        <div
          className="country-image"
          style={{ backgroundImage: `url(${flags.svg})` }}
        ></div>
        <div className="country-container">
          <div className="country-title">
            <h1>{name.common}</h1>
          </div>
          <div className="country-list">
            <ul>
              <li>
                <p>Population: {population.toLocaleString()}</p>
              </li>
              <li>
                <p>Region: {region}</p>
              </li>
              <li>
                <p>Subregion: {subregion}</p>
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Country;
