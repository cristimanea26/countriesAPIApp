import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries.jsx";
import SingleCountry from "./components/SingleCountry.jsx";

const App = () => {
  return (
    <div className="App">
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Countries />} />
            <Route path="/:name" element={<SingleCountry />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
