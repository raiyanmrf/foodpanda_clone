import React from "react";
import { citiesArray } from "../../assets/images/cities/index";
import { Link, useNavigate } from "react-router-dom";

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
              <Link to={`/city/${city.name.toLowerCase()}`}>
                <img
                  src={city.image}
                  alt={city.name}
                  className="city-grid-item-img"
                />
                <p className="cities-grid-item-caption">{city.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cities;
