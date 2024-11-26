import React, { Fragment, useEffect, useState, useMemo } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaCheckSquare } from "react-icons/fa";
import { FaAngleDown, FaAngleUp, FaMinus, FaPlus } from "react-icons/fa6";
import useIsActive from "../hooks/useIsActive";
import selection from "../utils/selectionModifier.json";

const ItemPopup = ({ setIsModalActive, item }) => {
  const [isDropActive, handleIsDropActive] = useIsActive();
  const [text, setText] = useState("Remove from my order");

  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  // Using useMemo to memoize the filtered selection data
  const filteredSelection = useMemo(() => {
    return selection
      .filter((product) => product.type.includes(item.type))
      .map((product, index) => (
        <div key={index} className="popup-item-suggestion">
          {product.choices.map((content, index) => (
            <Fragment key={index}>
              <summary>
                <h3>{content.type}</h3>
                {content.limit ? (
                  <p>Select up to {content.limit}</p>
                ) : (
                  <p>Others around you liked this</p>
                )}
                <span>{content.required ? "required" : "Optional"}</span>
              </summary>
              <ul>
                {content.items.map((option, index) => (
                  <li key={index}>
                    <input type="checkbox" id="selectItems" />
                    <label htmlFor="selectItems">
                      <FaCheckSquare />
                    </label>
                    {option.image && (
                      <img
                        src={option.image}
                        width={"40px"}
                        height={"40px"}
                        alt=""
                      />
                    )}
                    <p>{option.name}</p>
                    <p>
                      <strong>+Tk 29</strong>
                      <span>Tk 32</span>
                    </p>
                  </li>
                ))}
              </ul>
            </Fragment>
          ))}
        </div>
      ));
  }, [item.type]); // Depend on item.type to re-filter when it changes
  console.log("ItemPopUp:", item.type);
  return (
    <section className="popup-container">
      <section className="popup-item">
        <figure
          className="popup-item-cross"
          onClick={(e) => {
            e.stopPropagation();
            setIsModalActive(false);
          }}
        >
          <RxCross1 />
        </figure>
        <article className="popup-item-content">
          <header>
            <h3>{item.name}</h3>
          </header>
          <picture>
            <img style={{ width: "100%" }} src={item.image} alt="" />
          </picture>

          <summary className="popup-item-description">
            <h3>{item.name}</h3>
            <h3>
              <strong>Tk {item.price}</strong>
              <span>Tk {item.price + item.price * 0.1}</span>
              <span>10% off</span>
            </h3>

            <p className="">{item.detail}</p>
          </summary>

          {/* Render the filtered selection */}
          {filteredSelection}

          <div className="popup-item-orderActions">
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
              <div className="popup-item-selector">
                <div
                  className="popup-item-selector-box"
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
          <div className="popup-item-update">
            <button>
              <FaMinus />
            </button>
            <p>1</p>
            <button>
              <FaPlus />
            </button>
          </div>

          <button className="btn btn-pink btn-lg">Add to cart</button>
        </footer>
      </section>
    </section>
  );
};

export default ItemPopup;
