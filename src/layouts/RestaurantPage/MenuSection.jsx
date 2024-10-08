import { foodNavLinks } from "../../../public/data/foodData";
import useSlideRef from "../../hooks/useSlideRef";
import MenuDisplay from "./MenuDisplay";
import MenuNavbar from "./MenuNavbar";

const MenuSection = () => {
  const [
    cardRefs,
    handleCardToggleNext,
    handleCardTogglePrev,
    index,
    handleHoverImpact,
  ] = useSlideRef(foodNavLinks.fastfood.length);

  return (
    <section className="dish">
      <MenuNavbar
        cardRefs={cardRefs}
        handleCardToggleNext={handleCardToggleNext}
        handleCardTogglePrev={handleCardTogglePrev}
        index={index}
      />

      <MenuDisplay handleHoverImpact={handleHoverImpact} cardRefs={cardRefs} />
    </section>
  );
};

export default MenuSection;
