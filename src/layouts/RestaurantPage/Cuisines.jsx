import React from "react";
import {
  foodMenu,
  orderedItem,
  suggestItems,
} from "../../assets/data/foodData";
import { LiaPlusSolid } from "react-icons/lia";
import ItemPopup from "../../components/ItemPopup";

const Cuisines = ({ links, items, handleHoverImpact, cardRefs }) => {
  return (
    <section className="foodMenu-cuisines">
      {links.map((link, i) => (
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
            <h3>{link}</h3>
            {link === "Popular" && <p>Most ordered right now</p>}
          </div>

          <div className="foodMenu-content">
            {items
              .filter((item) => item.tag === link)
              .map((item) => (
                <article className="foodMenu-card">
                  <summary className="foodMenu-card-info">
                    <h4>{item.name}</h4>

                    <p>Tk {item.price}</p>

                    <p className="ellipsis">{item.detail}</p>
                  </summary>

                  <picture className="foodMenu-card-image">
                    {item.image && <img src={item.image} alt="menu" />}

                    <button>
                      <LiaPlusSolid />
                    </button>
                  </picture>
                </article>
              ))}
            {/* 
            <ItemPopup /> */}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cuisines;
