import { starIcon } from "../../assets/svg";
import BreadCrumbs from "../../components/BreadCrumbs";
import { useNavigate } from "react-router-dom";

import OfferTags from "../../components/OfferTags";
import { isTheRestaurantOpen } from "../../utils/isRestaurantOpen";
import RestaurantsGrid from "../../components/RestaurantsGrid";
import { useEffect, useRef } from "react";

const AllRestaurants = ({ data }) => {
  return (
    <section className="restaurant">
      <div className="restaurant-title">
        <BreadCrumbs linkArray={["Homepage", `${data[0].city}`]} />
        <h1>All Restaurants</h1>
      </div>

      <RestaurantsGrid data={data} />
    </section>
  );
};

export default AllRestaurants;
