import React from "react";
import RestaurantProfile from "../layouts/RestaurantPage/RestaurantProfile";
import AvailableDeals from "../layouts/RestaurantPage/AvailableDeals";
import DishSection from "../layouts/RestaurantPage/DishSection";

const RestaurantPage = () => {
  return (
    <>
      <RestaurantProfile />
      <AvailableDeals />
      <DishSection />
    </>
  );
};

export default RestaurantPage;
