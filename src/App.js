import './App.css';
import Navbar from './components/Navbar/Navbar';
import React, { useState } from 'react';
import CountriesList from './components/CountriesList/CountriesList';
import countriesJSON from './countries.json';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState(countriesJSON);

  return (
    <div className="App">
      {console.log(countries[0].name.common)}
      <Navbar />

      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />} />

        <Route path="/:alpha3Code" element={<CountryDetails countries={countries} />} />
      </Routes>
    </div>
  );
}

export default App;
