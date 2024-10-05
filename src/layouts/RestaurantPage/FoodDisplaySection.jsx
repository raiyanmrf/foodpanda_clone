import React, { useEffect, useRef, useState } from "react";
import { foodMenu } from "../../../public/data/foodData";
import { FaPlus } from "react-icons/fa6";
import { pandaCart } from "../../../public/data/images";

const FoodDisplaySection = ({ handleHoverImpact, cardRefs }) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <section className="foodMenu">
      <div className="foodMenu-cuisines">
        {foodMenu.chinese.map((menu, index) => (
          <div
            className="foodMenu-single-cuisine"
            onPointerOver={() => {
              cardRefs.current[index] && handleHoverImpact(index);
            }}
            onPointerOut={() => {
              cardRefs.current[index] && cardRefs.current[index].blur();
            }}
            key={index}
          >
            <div className="foodMenu-title">
              <h3>{menu.category}</h3>
              {menu.category === "popular" && <p>Most ordered right now</p>}
            </div>

            <div className="foodMenu-content">
              {menu.items.map((item, index) => (
                <div key={index} className="foodMenu-card">
                  <div className="foodMenu-card-info">
                    <h4>{item.name}</h4>

                    <p>{item.price}</p>

                    <p className="ellipsis">i{item.description}</p>
                  </div>

                  <div className="foodMenu-card-image">
                    <img src={item.image} width={`500px`} alt="menu" />

                    <button>
                      <FaPlus />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="foodMenu-sidebar">
        <div className="foodMenu-sidebar-content">
          <div className="foodMenu-sidebar-tab">
            <button
              onClick={() => setIsActive(true)}
              className={`${isActive && "btn-active"}`}
            >
              Delivery
              {isActive && <p>Standard (25-30min)</p>}
            </button>
            <button
              onClick={() => setIsActive(false)}
              className={`${!isActive && "btn-active"}`}
            >
              Pick Up
              {!isActive && <p>Standard (25-30min)</p>}
            </button>
          </div>

          <div className="foodMenu-sidebar-empty">
            <img src={pandaCart} width={`120px`} alt="cart" />
            <h3>Hungry?</h3>
            <p>You haven't added anything to your cart!</p>
          </div>
        </div>

        <div className="foodMenu-sidebar-checkout">
          <div className="foodMenu-sidebar-amount">
            <h3>
              Total <span>(incl. fees and tax)</span>
            </h3>
            <p>Tk 500</p>
          </div>

          <a href="">See Summary</a>

          <button className="btn btn-pink btn-lg btn-moderate">
            review payment and address
          </button>
        </div>
      </div>
    </section>
  );
};

export default FoodDisplaySection;
