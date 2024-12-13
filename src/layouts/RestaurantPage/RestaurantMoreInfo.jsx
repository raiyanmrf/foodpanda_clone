import React from "react";
import { RxCross1 } from "react-icons/rx";
import GoogleMap from "../../components/GoogleMap";
import { isTheRestaurantOpen } from "../../utils/isRestaurantOpen";

const RestaurantMoreInfo = ({ setIsRestaurantInfoPopup, restaurant }) => {
  const status = isTheRestaurantOpen(restaurant.cuisine);
  return (
    <section className="popup-container">
      <div className="restaurantInfoPopup">
        <header>
          <h3>{restaurant.name}</h3>
          <button onClick={() => setIsRestaurantInfoPopup(false)}>
            <RxCross1 />
          </button>
        </header>

        <article>
          <GoogleMap lat={restaurant.lat} lng={restaurant.long} />
          <p>{status}</p>
          <p>{restaurant.address}</p>
        </article>
      </div>
    </section>
  );
};

export default RestaurantMoreInfo;
