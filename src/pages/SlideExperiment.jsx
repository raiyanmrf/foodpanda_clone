import Slider from "../components/Slider";
import FavCuisines from "../layouts/RestaurantsNearby/FavCuisines";
import DailyDeals from "../layouts/RestaurantsNearby/DailyDeals";

import RestaurantSlide from "../components/RestaurantSlide";

import { useParams } from "react-router-dom";
import Banner from "../layouts/CityPage/Banner";
import Loading from "../assets/svg/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import AllRestaurants from "../layouts/CityPage/Allrestaurants";
import useInfiniteFetch from "../hooks/useInfiniteFetch";
import { useEffect } from "react";
import { useMapContext } from "../components/MapContextComponent";
const SlideExperiment = () => {
  const { navbarLocation, setNavbarLocation } = useMapContext();
  const { area, lat, lng } = useParams();
  const key = "nearMe";
  const city = area.toLocaleLowerCase();
  const url = "https://restaurant-server-ni4y.onrender.com/api";

  useEffect(() => {
    !navbarLocation && setNavbarLocation({ lat, lng, locality: area });
  }, [navbarLocation, setNavbarLocation]);

  const { isLoading, isError, fetchNextPage, hasNextPage, restaurantData } =
    useInfiniteFetch(url, key, city, lat, lng);
  // Show a loading state
  if (isLoading) {
    return (
      <section className="content">
        <Loading />
      </section>
    );
  }

  // Show error message when an error occurs
  if (isError) {
    return (
      <section className="content">
        <Banner
          value={`banner`}
          title={`Sorry! we are not in this area yet.`}
        />
      </section>
    );
  }

  return (
    <section className="content ">
      <Slider title={"Favourite Cuisines"}>
        <FavCuisines />
      </Slider>
      <Slider title={"Daily Deals"}>
        <DailyDeals />
      </Slider>
      <RestaurantSlide
        data={restaurantData}
        query={"panda"}
        title={"Panda's Kitchen"}
      />

      <RestaurantSlide
        data={restaurantData}
        query={"sweets"}
        title={"Sweet Tooth"}
      />

      <InfiniteScroll
        dataLength={restaurantData ? restaurantData.length : 0}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<Loading />}
        style={{ overflow: "hidden" }}
      >
        {restaurantData && <AllRestaurants data={restaurantData} />}
      </InfiniteScroll>
    </section>
  );
};

export default SlideExperiment;
