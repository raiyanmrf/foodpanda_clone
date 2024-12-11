import LocationSearch from "../../components/LocationSearch";
import { useMapContext } from "../../components/MapContextComponent";
import { handleMapLibrary } from "../../utils/mapLogic";
import Banner from "../CityPage/Banner";

const Hero = () => {
  const { isLoaded } = useMapContext();
  return (
    <Banner
      value={`hero`}
      title={`It's the food and groceries you love, delivered`}
    >
      <div className="hero-location">{isLoaded && <LocationSearch />} </div>
    </Banner>
  );
};

export default Hero;
