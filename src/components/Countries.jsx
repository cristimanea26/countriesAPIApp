import React, { useState, useEffect } from "react";
import Country from "./Country.jsx";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");

  const regions = [
    {
      name: "Europe",
    },
    {
      name: "Asia",
    },
    {
      name: "Africa",
    },
    {
      name: "Oceania",
    },
    {
      name: "Americas",
    },
    {
      name: "Antarctic",
    },
  ];

  useEffect(() => {
    document.title = `All Countries`;

    const getCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };

    getCountries();
  }, []);

  async function searchCountry() {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${searchText}`
      );
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function filterByRegion(region) {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSearchCountry = (e) => {
    e.preventDefault();
    searchCountry();
  };

  const handleFilterByRegion = (e) => {
    e.preventDefault();
    handleFilterByRegion();
  };

  return (
    <div className="countries">
      {!countries ? (
        <div className="loader">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="countries-container">
          <div className="countries-forms">
            <form
              className="search"
              onSubmit={handleSearchCountry}
              autoComplete="off"
            >
              <input
                type="text"
                name="search"
                id="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search for a country"
                required
              />
            </form>
            <form
              className="regions"
              onSubmit={handleFilterByRegion}
              onChange={(e) => filterByRegion(e.target.value)}
            >
              <select name="regions" id="regions" value={regions.name}>
                {regions.map((region, i) => (
                  <option key={i} value={region.name}>
                    {region.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <div className="countries-inner">
            {countries.map((country) => (
              <Country key={country.name.common} {...country} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Countries;
