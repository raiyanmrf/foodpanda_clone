import React from "react";
import RestaurantProfile from "../layouts/RestaurantPage/RestaurantProfile";
import AvailableDeals from "../layouts/RestaurantPage/AvailableDeals";
import MenuSection from "../layouts/RestaurantPage/MenuSection";
import { useLocation } from "react-router-dom";

const RestaurantPage = () => {
  const { state } = useLocation();

  return (
    <section className="content">
      <RestaurantProfile state={state} />
      <AvailableDeals />
      <MenuSection cuisine={state.cuisine.toLowerCase()} />
    </section>
  );
};

export default RestaurantPage;
