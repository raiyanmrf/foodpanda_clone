import React, { useState } from "react";
import {
  foodMenu,
  orderedItem,
  suggestItems,
} from "../../../public/data/foodData";
import { FaBackward, FaForward, FaPlus } from "react-icons/fa6";
import { pandaCart } from "../../../public/data/images";
import { FiDelete } from "react-icons/fi";

import { RiDeleteBin5Line } from "react-icons/ri";
import useSlideRef from "../../hooks/useSlideRef";
import { CiForkAndKnife } from "react-icons/ci";

const MenuDisplay = ({ handleHoverImpact, cardRefs }) => {
  const [isActive, setIsActive] = useState(true);
  const [itemsRefs, handleToggleNext, handleTogglePrev, index] = useSlideRef(
    suggestItems.length
  );
  console.log(index);
  return (
    <section className="foodMenu">
      <div className="foodMenu-cuisines">
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

          {/* <div className="foodMenu-sidebar-empty">
            <img src={pandaCart} width={`120px`} alt="cart" />
            <h3>Hungry?</h3>
            <p>You haven't added anything to your cart!</p>
          </div> */}

          <div className="foodMenu-sidebar-order">
            <div className="foodMenu-sidebar-items">
              <h4>Your Items</h4>
              {orderedItem.map((item, index) => (
                <div key={index} className="foodMenu-sidebar-singleItem">
                  <div className="foodMenu-sidebar-orderInfo">
                    <img
                      src={item.image}
                      alt="item"
                      height={`46px`}
                      width={`56px`}
                    />

                    <div className="foodMenu-sidebar-orderText">
                      <p className="title-ellipsis">{item.name}</p>
                      <p className="title-ellipsis">Extra Cheese..</p>
                      <div className="foodMenu-sidebar-orderUpdate">
                        <p>{item.price}</p>

                        <button>
                          <RiDeleteBin5Line /> <span>1</span> <FaPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className=" foodMenu-sidebar-suggestItems">
              <div className=" foodMenu-sidebar-orderInfo">
                <div className=" foodMenu-sidebar-orderText">
                  <h3>Popular with your order</h3>
                  <p>Based on what other customers bought together</p>
                </div>
                <div className="foodMenu-sidebar-toogleBtns">
                  <button
                    // disabled={index === 0}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTogglePrev();
                    }}
                    className=" signin-cancel"
                  >
                    <FaBackward />
                  </button>
                  <button
                    // disabled={''}
                    className=" signin-cancel"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleNext();
                    }}
                  >
                    <FaForward />
                  </button>
                </div>
              </div>

              <div className=" foodMenu-sidebar-slide-container">
                <ul>
                  {suggestItems.map((item, i) => (
                    <li ref={(el) => (itemsRefs.current[i] = el)} key={i}>
                      <div>
                        <img
                          src={item.image}
                          width={`150px`}
                          height={`140px`}
                          alt={item.name}
                        />
                        <button>
                          <FaPlus />
                        </button>
                      </div>

                      <article>
                        <p>{item.price}</p>
                        <p>{item.name}</p>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <summary id="summary">
              <p>
                <span>Subtotal</span>
                <span>Tk 1433</span>
              </p>
              <p>
                <span>Standard delivery</span>
                <span className="pink-text">free</span>
                <span>Welcome gift:free delivery</span>
              </p>
              <p>
                <span>Service fee</span>
                <span>Tk 9</span>
              </p>
              <p>
                <span>VAT</span>
                <span>Tk 73</span>
              </p>
            </summary>

            <div className=" foodMenu-sidebar-cutlery">
              <CiForkAndKnife />

              <div>
                <p>Cutlery</p>
                <p>No cutlery provided. Thanks for reducing waste!</p>
              </div>

              <div className="switch-div">
                <input id="switch" type="checkbox" />
                <label htmlFor="switch"></label>
              </div>
            </div>
          </div>
        </div>

        <div className="foodMenu-sidebar-checkout">
          <div className="foodMenu-sidebar-amount">
            <p>
              Total <span>(incl. fees and tax)</span>
            </p>
            <p>Tk 500</p>
          </div>

          <a href="#summary">See Summary</a>

          <button className="btn btn-pink btn-lg btn-moderate">
            review payment and address
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuDisplay;
