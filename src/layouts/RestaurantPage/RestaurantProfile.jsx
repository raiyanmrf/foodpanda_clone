import React from "react";
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
import Cuisines from "../../components/Cuisines";
import { useLocation } from "react-router-dom";

const RestaurantProfile = ({ state }) => {
  const {
    address,
    city,
    cuisine,
    image,
    lat,
    long,
    name,
    offer,
    ratings,
    reviews,
    _id,
  } = state;

  const items = [`${cuisine}`, "Beverage", "Cakes", "Dessert"];
  return (
    <section className="restaurant-profile">
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
          <button className="btn btn-white btn-md btn-moderate btn-flex">
            <img src={helpcenterIcon} alt="i" />
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default RestaurantProfile;
