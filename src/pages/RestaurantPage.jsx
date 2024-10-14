import React from "react";
import RestaurantProfile from "../layouts/RestaurantPage/RestaurantProfile";
import AvailableDeals from "../layouts/RestaurantPage/AvailableDeals";
import MenuSection from "../layouts/RestaurantPage/MenuSection";

const RestaurantPage = () => {
  return (
    <section className=" content">
      <RestaurantProfile />
      <AvailableDeals />
      <MenuSection />
    </section>
  );
};

export default RestaurantPage;
