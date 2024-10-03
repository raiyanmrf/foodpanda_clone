import React from "react";
import { foodMenu } from "../../../public/data/foodData";
import { FaPlus } from "react-icons/fa6";

const FoodDisplaySection = () => {
  return (
    <section className="foodMenu">
      {foodMenu.chinese.map((menu, index) => (
        <div key={index} className="foodMenu-container">
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

                  <p>i{item.description}</p>
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

      <div className="foodMenu-sidebar"></div>
    </section>
  );
};

export default FoodDisplaySection;
