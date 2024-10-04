import { foodNavLinks } from "../../../public/data/foodData";
import DishNavigation from "../../components/DishNavigation";
import useSlideRef from "../../hooks/useSlideRef";
import FoodDisplaySection from "./FoodDisplaySection";

const DishSection = () => {
  const [
    cardRefs,
    handleCardToggleNext,
    handleCardTogglePrev,
    index,
    handleHoverImpact,
  ] = useSlideRef(foodNavLinks.fastfood.length);

  return (
    <section className="dish">
      <DishNavigation
        cardRefs={cardRefs}
        handleCardToggleNext={handleCardToggleNext}
        handleCardTogglePrev={handleCardTogglePrev}
        index={index}
      />

      <FoodDisplaySection
        handleHoverImpact={handleHoverImpact}
        cardRefs={cardRefs}
      />
    </section>
  );
};

export default DishSection;
