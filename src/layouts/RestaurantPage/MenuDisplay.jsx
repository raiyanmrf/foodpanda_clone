import { useContext } from "react";
import Cart from "../../components/Cart";
import ItemPopup from "../../components/ItemPopup";

import SpecialCartBtns from "./SpecialCartBtns";

import { cartContext } from "../../hooks/CartContext";

const MenuDisplay = ({ links, foodItems }) => {
  const {
    isItemPopupActive,
    setIsItemPopupActive,
    currentItem,
    setCurrentItem,
  } = useContext(cartContext);

  return (
    <section className="foodMenu">
      <section className="foodMenu-cuisines">
        {links.map((link, i) => (
          <div className="foodMenu-single-cuisine" key={i}>
            <div
              className="foodMenu-title"
              id={link.replace(/\s+/g, "").toLowerCase()}
            >
              <h3>{link}</h3>
              {link === "Popular" && <p>Most ordered right now</p>}
            </div>

            <div
              className="foodMenu-content"
              onMouseOver={() => {
                const id = `${link.replace(/\s+/g, "")}2`;
                const el = document.getElementById(id);
                el && el.focus();
              }}
            >
              {foodItems
                .filter((item) => item.tag === link)
                .map((item, index) => (
                  <article
                    id={`${item.name.replace(/\s+/g, "").toLowerCase()}`}
                    className="foodMenu-card"
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentItem(item);
                      setIsItemPopupActive(true);
                    }}
                  >
                    <summary className="foodMenu-card-info">
                      <h4>{item.name}</h4>

                      <p>{item.price_desc}</p>

                      <p className="ellipsis">{item.detail}</p>
                    </summary>

                    <picture className="foodMenu-card-image">
                      {item.image && <img src={item.image} alt="menu" />}

                      <SpecialCartBtns item={item} />
                    </picture>
                  </article>
                ))}
              {isItemPopupActive && (
                <ItemPopup
                  key={currentItem.name}
                  setIsItemPopupActive={setIsItemPopupActive}
                  foodItem={currentItem}
                />
              )}
            </div>
          </div>
        ))}
      </section>

      <Cart />
    </section>
  );
};

export default MenuDisplay;
