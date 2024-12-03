import { useContext, useEffect, useState } from "react";
import Cart from "../../components/Cart";
import ItemPopup from "../../components/ItemPopup";

import SpecialCartBtns from "./SpecialCartBtns";

import { cartContext } from "../../hooks/CartContext";

const MenuDisplay = ({ links, foodItems }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const { cartItems, tempItems } = useContext(cartContext);

  return (
    <section className="foodMenu">
      <section className="foodMenu-cuisines">
        {links.map((link, i) => (
          <div className="foodMenu-single-cuisine" key={i}>
            <div className="foodMenu-title" id={link.replace(/\s+/g, "")}>
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
                    className="foodMenu-card"
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentItem(item);
                      setIsModalActive(true);
                    }}
                  >
                    <summary className="foodMenu-card-info">
                      <h4>{item.name}</h4>

                      <p>Tk {item.price}</p>

                      <p className="ellipsis">{item.detail}</p>
                    </summary>

                    <picture className="foodMenu-card-image">
                      {item.image && <img src={item.image} alt="menu" />}

                      <SpecialCartBtns item={item} />
                    </picture>
                  </article>
                ))}
              {isModalActive && (
                <ItemPopup
                  key={currentItem.name}
                  setIsModalActive={setIsModalActive}
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
