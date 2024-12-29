import React from "react";
import { citiesArray } from "../../assets/images/cities/index";
import { Link, useNavigate } from "react-router-dom";

const Cities = () => {
  const navigate = useNavigate();
  const handleCityClick = (city) => {
    if (city.available) {
      navigate(`/city/${city.name.toLowerCase()}`);
    } else {
      alert("Sorry! We are not in this area.");
    }
  };
  return (
    <section className="cities">
      <div className="cities-title">
        <h1>Find us in these cities and many more!</h1>
      </div>

      <div className="cities-grid">
        {citiesArray.map((city) => {
          return (
            <div
              onClick={(e) => {
                handleCityClick(city);
              }}
              key={city.id}
              className="cities-grid-item"
            >
              <div>
                <img
                  src={city.image}
                  alt={city.name}
                  className="city-grid-item-img"
                />
                <p className="cities-grid-item-caption">{city.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cities;
