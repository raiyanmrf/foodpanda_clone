import Cuisines from "./Cuisines";
import Cart from "../../components/Cart";

const MenuDisplay = ({ links, items, handleHoverImpact, cardRefs }) => {
  return (
    <section className="foodMenu">
      <Cuisines
        links={links}
        items={items}
        handleHoverImpact={handleHoverImpact}
        cardRefs={cardRefs}
      />

      {/* <Cart /> */}
    </section>
  );
};

export default MenuDisplay;
