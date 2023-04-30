import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SingleCountry = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    document.title = `Country | ${name}`;

    const getSingleCountry = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const data = await response.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };

    getSingleCountry();
  }, [name]);

  return (
    <div className="single-country">
      {country.map((item, i) => (
        <div key={i} className="single-country-inner">
          <div
            className="single-country-image"
            style={{ backgroundImage: `url(${item.flags.svg})` }}
          ></div>
          <div className="single-country-container">
            <div className="single-country-title">
              <h1>{item.name.official}</h1>
            </div>
            <div className="single-country-list">
              <ul>
                <li>
                  <p>Capital: {item.capital[0]}</p>
                </li>
                <li>
                  <p>Population: {item.population.toLocaleString()}</p>
                </li>
                <li>
                  <p>Region: {item.region}</p>
                </li>
                <li>
                  <p>Subregion: {item.subregion}</p>
                </li>
              </ul>
            </div>

            {item.borders && (
              <div className="borders">
                <h2>Borders: </h2>
                <ul>
                  {item.borders.map((border, i) => (
                    <li key={i}>
                      <p>{border}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <Link to="/">
              <span>Back</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleCountry;
