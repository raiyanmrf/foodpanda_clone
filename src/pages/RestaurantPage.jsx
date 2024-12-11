import React, { useEffect, useMemo, useState } from "react";
import RestaurantProfile from "../layouts/RestaurantPage/RestaurantProfile";
import MenuSection from "../layouts/RestaurantPage/MenuSection";
import { useParams } from "react-router-dom";
import Slider from "../components/Slider";
import { cardData } from "../assets/data/cardData";
import Cards from "../components/Cards";
import Loading from "../assets/svg/Loading";
import Banner from "../layouts/CityPage/Banner";
import LocationSearch from "../components/LocationSearch";

const RestaurantPage = () => {
  const { restaurantID } = useParams();
  const [restaurant, setRestaurant] = useState([]); // Initialized as an array
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchOneRestaurant = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://restaurant-server-ni4y.onrender.com/api/restaurant/${restaurantID}`
        );
        if (!res.ok) {
          setIsError(true);
          setIsLoading(false);
          throw new Error(
            res.status === 404 ? "Restaurant Not Found" : "Failed to fetch data"
          );
        }
        const data = await res.json();
        setRestaurant(data); // Assuming data is an array
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        console.error("Failed to fetch data:", error);
      }
    };

    fetchOneRestaurant();
  }, [restaurantID]);

  const restaurantData = useMemo(() => restaurant, [restaurant]);
  if (isLoading) {
    return (
      <section className="content">
        <Loading />
      </section>
    );
  }

  if (isError) {
    return (
      <section className="content">
        <Banner value="banner" title="Sorry! Restaurant Not Found." />
      </section>
    );
  }

  return (
    <section className="content">
      {restaurantData.length > 0 ? ( // Ensure there is at least one restaurant in the array
        <>
          <RestaurantProfile restaurant={restaurantData[0]} />

          <LocationSearch />

          <Slider title="Available Deals">
            {cardData &&
              cardData.map((item, index) => <Cards key={index} item={item} />)}
          </Slider>
          <MenuSection cuisine={restaurant[0].cuisine} />
        </>
      ) : (
        <Banner value="banner" title="No Restaurant Data Available." />
      )}
    </section>
  );
};

export default RestaurantPage;
