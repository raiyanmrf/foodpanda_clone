import HeroSearch from "../../components/HeroSearch";
import Banner from "../CityPage/Banner";

const Hero = () => {
  return (
    <Banner
      value={`hero`}
      title={`It's the food and groceries you love, delivered`}
    >
      <HeroSearch />
    </Banner>
  );
};

export default Hero;
