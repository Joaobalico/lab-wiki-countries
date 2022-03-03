import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div className="container">
      {props.countries.map((country) => {
        return (
          <div className="row">
            <div className="col-5">
              <div className="list-group">
                <Link to={`/${country.alpha3Code}`}>
                  <h2>{country.name.common}</h2>
                </Link>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
