import Slider from "../components/Slider";
import FavCuisines from "../layouts/RestaurantsNearby/FavCuisines";
import DailyDeals from "../layouts/RestaurantsNearby/DailyDeals";
import data from "../utils/city.json";
import { starIcon } from "../assets/svg";
import { RiDiscountPercentFill } from "react-icons/ri";
import alternateImage from "../assets/images/imageGenerator/alternative.webp";
import { LuClock4, LuDot } from "react-icons/lu";
import { MdDeliveryDining, MdFavoriteBorder } from "react-icons/md";
import { RxTriangleDown } from "react-icons/rx";
import { GrFavorite } from "react-icons/gr";
import RestaurantSlide from "../components/RestaurantSlide";
import { useEffect, useState } from "react";
const SlideExperiment = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch(`http://localhost:5000/api/bogra`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setRestaurants(data);
      console.log(data);
    };

    fetchRestaurants();
  }, []);
  return (
    <section className="content ">
      <Slider title={"Favourite Cuisines"}>
        <FavCuisines />
      </Slider>
      <Slider title={"Daily Deals"}>
        <DailyDeals />
      </Slider>
      <Slider title={"Home Chefs"}>
        <RestaurantSlide data={data.dhaka} query={"homechef"} />
      </Slider>

      <Slider title={"Pandapro"}>
        <RestaurantSlide data={data.dhaka} query={"pandapro"} />
      </Slider>

      {restaurants.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </section>
  );
};

export default SlideExperiment;
