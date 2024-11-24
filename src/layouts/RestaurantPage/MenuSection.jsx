import { foodNavLinks } from "../../assets/data/foodData";
import useSlideRef from "../../hooks/useSlideRef";
import MenuDisplay from "./MenuDisplay";
import MenuNavbar from "./MenuNavbar";
import menuJson from "../../utils/cuisines.json";

const MenuSection = ({ cuisine }) => {
  const filter = cuisine;
  const items = menuJson.filter(
    (item) => item.cuisine.toLocaleLowerCase() === cuisine
  );
  const navlinks = [...new Set(items.map((item) => item.tag))];
  const [
    cardRefs,
    handleCardToggleNext,
    handleCardTogglePrev,
    index,
    handleHoverImpact,
  ] = useSlideRef(navlinks.length);

  return (
    <section className="dish">
      <MenuNavbar
        items={items}
        links={navlinks}
        cardRefs={cardRefs}
        handleCardToggleNext={handleCardToggleNext}
        handleCardTogglePrev={handleCardTogglePrev}
        index={index}
      />

      <MenuDisplay
        links={navlinks}
        items={items}
        handleHoverImpact={handleHoverImpact}
        cardRefs={cardRefs}
      />
    </section>
  );
};

export default MenuSection;
