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
const SlideExperiment = () => {
  const { area, lat, lng } = useParams();
  const key = "nearMe";
  const city = area.toLocaleLowerCase();
  const url = "https://restaurant-server-ni4y.onrender.com/api/city";

  const { isLoading, isError, fetchNextPage, hasNextPage, restaurantData } =
    useInfiniteFetch(url, key, city);
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
        <Banner value={`banner`} title={`Sorry! we are not in this area.`} />
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
        query={"homechef"}
        title={"Home Chefs"}
      />

      <RestaurantSlide
        data={restaurantData}
        query={"pandadeal"}
        title={"Panda Deal"}
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
