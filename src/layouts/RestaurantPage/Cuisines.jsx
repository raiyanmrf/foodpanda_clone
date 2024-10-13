import React from "react";
import {
  foodMenu,
  orderedItem,
  suggestItems,
} from "../../../public/data/foodData";
import { LiaPlusSolid } from "react-icons/lia";
import ItemPopup from "../../components/ItemPopup";

const Cuisines = ({ handleHoverImpact, cardRefs }) => {
  return (
    <section className="foodMenu-cuisines">
      {foodMenu.chinese.map((menu, i) => (
        <div
          className="foodMenu-single-cuisine"
          onPointerOver={() => {
            cardRefs.current[i] && handleHoverImpact(i);
          }}
          onPointerOut={() => {
            cardRefs.current[i] && cardRefs.current[i].blur();
          }}
          key={i}
        >
          <div className="foodMenu-title">
            <h3>{menu.category}</h3>
            {menu.category === "popular" && <p>Most ordered right now</p>}
          </div>

          <div className="foodMenu-content">
            {menu.items.map((item, index) => (
              <article key={index} className="foodMenu-card">
                <summary className="foodMenu-card-info">
                  <h4>{item.name}</h4>

                  <p>{item.price}</p>

                  <p className="ellipsis">{item.description}</p>
                </summary>

                <figcaption className="foodMenu-card-image">
                  <img src={item.image} width={`500px`} alt="menu" />

                  <button>
                    <LiaPlusSolid />
                  </button>
                </figcaption>
              </article>
            ))}

            <ItemPopup />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cuisines;
