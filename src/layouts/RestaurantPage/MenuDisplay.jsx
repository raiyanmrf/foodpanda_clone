import Cuisines from "./Cuisines";
import Cart from "../../components/Cart";

const MenuDisplay = ({ handleHoverImpact, cardRefs }) => {
  return (
    <section className="foodMenu">
      <Cuisines handleHoverImpact={handleHoverImpact} cardRefs={cardRefs} />

      <Cart />
    </section>
  );
};

export default MenuDisplay;
