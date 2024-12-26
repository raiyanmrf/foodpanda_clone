import React from "react";
import { useMapContext } from "../../components/MapContextComponent";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const RestaurantTooFarPopup = () => {
  const { setPopupWhenFar, navbarLocation, setNavbarLocation } =
    useMapContext();

  const navigate = useNavigate();

  return (
    <section className="popup-container restaurantTooFarPopup-container">
      <div className="restaurantTooFarPopup">
        <p>Oops, your current location is too Far</p>

        <div className="restaurantTooFarPopup-Btns">
          <button
            onClick={(e) => {
              e.stopPropagation();
              const { lat, lng, locality } = navbarLocation;
              setPopupWhenFar(false);
              navigate(`/area/${locality.toLowerCase()}/${lat}/${lng}`);
            }}
            className="btn btn-pink btn-md restaurantTooFarPopup-findBtn"
            type="submit"
          >
            Find Nearby Restaurant
          </button>
          <button
            className="btn btn-md restaurantTooFarPopup-closeBtn"
            onClick={(e) => {
              e.stopPropagation();
              setPopupWhenFar(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
};

export default RestaurantTooFarPopup;
