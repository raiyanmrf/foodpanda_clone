import React, { useEffect, useState, useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import useIsActive from "../hooks/useIsActive";
import { cartContext } from "../hooks/CartContext";
import { useParams } from "react-router-dom";
import { handleAddNewProduct } from "../utils/cartLogic";
import { ItemPopupOptions } from "../layouts/RestaurantPage/ItemPopupOptions";
import ItemPopupUpdateButtons from "../layouts/RestaurantPage/ItemPopupUpdateButtons";
import { handleMergingToCartItems } from "../utils/foodItemPopupLogic";

const ItemPopup = ({ setIsModalActive, foodItem }) => {
  const { restaurantID } = useParams();
  const {
    cartItems,
    setCartItems,
    sideItems,
    setSideItems,
    tempItems,
    setTempItems,
  } = useContext(cartContext);
  const [isDropActive, handleIsDropActive] = useIsActive();
  const [text, setText] = useState("Remove from my order");

  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <section className="popup-container">
      <section className="itemPopup">
        <figure
          className="itemPopup-cross"
          onClick={(e) => {
            e.stopPropagation();
            setIsModalActive(false);
            setSideItems([]);
          }}
        >
          <RxCross1 />
        </figure>
        <article className="itemPopup-content">
          <header>
            <h3>{foodItem.name}</h3>
          </header>
          <picture>
            <img style={{ width: "100%" }} src={foodItem.image} alt="" />
          </picture>

          <summary className="itemPopup-description">
            <h3>{foodItem.name}</h3>
            <h3>
              <strong>Tk {foodItem.price}</strong>
              <span>Tk {foodItem.price + foodItem.price * 0.1}</span>
              <span>10% off</span>
            </h3>

            <p className="">{foodItem.detail}</p>
          </summary>

          <ItemPopupOptions foodItem={foodItem} />

          <div className="itemPopup-orderActions">
            <article>
              <h3>Special instructions</h3>
              <p>
                Special requests are subject to the restaurant's approval. Tell
                us here!
              </p>
              <textarea name="" id="" placeholder="e.g. No Mayo"></textarea>
            </article>
            <article>
              <h3>If this item is not available</h3>
              <div className="itemPopup-selector">
                <div
                  className="itemPopup-selector-box"
                  onClick={handleIsDropActive}
                >
                  <p id="replaceText">{text}</p>
                  {isDropActive ? <FaAngleUp /> : <FaAngleDown />}
                </div>

                <ul className={`${isDropActive && "visible"}`}>
                  <li
                    onClick={() => {
                      setText("Remove From my order");
                    }}
                  >
                    Remove From my order
                  </li>
                  <li
                    onClick={() => {
                      setText("Call Me");
                    }}
                  >
                    Call me
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </article>

        <footer>
          <ItemPopupUpdateButtons foodItem={foodItem} />

          <button
            className="btn btn-pink btn-lg"
            onClick={(e) => {
              e.stopPropagation();

              setIsModalActive(false);

              tempItems.items.length === 0
                ? handleAddNewProduct(
                    cartItems,
                    setCartItems,
                    foodItem,
                    restaurantID,
                    sideItems
                  )
                : handleMergingToCartItems(
                    tempItems,
                    setTempItems,
                    cartItems,
                    setCartItems,
                    restaurantID
                  );

              setSideItems([]);
            }}
          >
            Add to cart
          </button>
        </footer>
      </section>
    </section>
  );
};

export default ItemPopup;
