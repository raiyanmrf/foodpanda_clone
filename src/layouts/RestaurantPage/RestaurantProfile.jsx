import React, { useEffect, useState } from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import {
  deliveryIcon,
  freeDeliveryIcon,
  helpcenterIcon,
  pandaIcon,
  pickupIcon,
  shopIcon,
  starIcon,
} from "../../assets/svg";
import { MdHelpOutline } from "react-icons/md";
import Cuisines from "../../components/Cuisines";
import { useLocation } from "react-router-dom";
import GoogleMap from "../../components/GoogleMap";
import RestaurantMoreInfo from "./RestaurantMoreInfo";
import { useMapContext } from "../../components/MapContextComponent";
import { isWithin3Km } from "../../utils/mapLogic";

const RestaurantProfile = ({ restaurant }) => {
  const { city, cuisine, image, name, ratings, reviews, lat, lng } = restaurant;
  const items = [`${cuisine}`, "Beverage", "Cakes", "Dessert"];
  const { navbarLocation } = useMapContext();
  const [isTooFar, setIsTooFar] = useState(false);

  const [isRestaurantInfoPopup, setIsRestaurantInfoPopup] = useState(false);

  useEffect(() => {
    const initiaze = () => {
      if (navbarLocation) {
        const bool = isWithin3Km(
          navbarLocation.lat,
          navbarLocation.lng,
          lat,
          lng,
          navbarLocation.locality
        );
        console.log(bool);
        setIsTooFar(bool);
      }
    };

    initiaze();
  }, []);

  return (
    <section className="restaurant-profile">
      {isTooFar && <h1>Too Far</h1>}
      <BreadCrumbs linkArray={["Homepage", `${city}`, `${name}`]} />

      <div className="restaurant-profile-content">
        <div className="restaurant-profile-avatar">
          <img width={`156px`} height={`100px`} src={image} alt="" />

          <h3>
            <Cuisines items={items} />
            {name}
          </h3>
        </div>

        <div className="restaurant-profile-offer">
          <img src={deliveryIcon} alt="c" />
          <p>
            Free Delivery <span>Tk 99</span>
          </p>

          <div className="dot-separator"></div>

          <img src={shopIcon} alt="c" />
          <p>Min. order Tk 50</p>
        </div>

        <div className="restaurant-profile-ratings">
          <img src={starIcon} alt="*" />
          <p>
            {ratings}/5 <span>{reviews}</span>
          </p>

          <button className="btn btn-white btn-md btn-moderate">
            See Reviews
          </button>
        </div>

        <div className="restaurant-profile-infoBtn">
          <button
            className="btn btn-white btn-md btn-moderate btn-flex"
            onClick={() => {
              setIsRestaurantInfoPopup(true);
              setPlaceSelected({ lat: restaurant.lat, lng: restaurant.long });
            }}
          >
            <MdHelpOutline />
            More Info
          </button>
        </div>
      </div>

      {isRestaurantInfoPopup && (
        <RestaurantMoreInfo
          setIsRestaurantInfoPopup={setIsRestaurantInfoPopup}
          restaurant={restaurant}
        />
      )}
    </section>
  );
};

export default RestaurantProfile;
