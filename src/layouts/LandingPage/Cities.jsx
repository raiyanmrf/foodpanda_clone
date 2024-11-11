import React from "react";
import { citiesArray } from "../../assets/images/cities/index";
import { useNavigate } from "react-router-dom";

const Cities = () => {
  const navigate = useNavigate();
  return (
    <section className="cities">
      <div className="cities-title">
        <h1>Find us in these cities and many more!</h1>
      </div>

      <div className="cities-grid">
        {citiesArray.map((city) => {
          return (
            <div
              onClick={() => {
                navigate(`/city/${city.name.toLowerCase()}`);
              }}
              key={city.id}
              className="cities-grid-item"
            >
              <a href="">
                <img
                  src={city.image}
                  alt={city.name}
                  className="city-grid-item-img"
                />
                <p className="cities-grid-item-caption">{city.name}</p>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cities;
