import React, {
  Fragment,
  useEffect,
  useState,
  useMemo,
  useContext,
} from "react";
import { RxCross1 } from "react-icons/rx";
import { FaCheckSquare } from "react-icons/fa";
import { FaAngleDown, FaAngleUp, FaMinus, FaPlus } from "react-icons/fa6";
import useIsActive from "../hooks/useIsActive";
import selection from "../utils/selectionModifier.json";
import { cartContext } from "../hooks/CartContext";
import { useParams } from "react-router-dom";
import { handleAddToCart } from "../utils/cartLogic";

const ItemPopup = ({ setIsModalActive, item }) => {
  const { restaurantID } = useParams();
  const { isCartEmpty, setIsCartEmpty, cartItems, setCartItems } =
    useContext(cartContext);
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
        <Fragment key={index}>
          {product.choices.map((content, index) => {
            console.log(content);

            return (
              <form
                key={index}
                className={`itemPopup-options ${
                  content.required && "itemPopup-required"
                }`}
              >
                <article className="itemPopup-options-title">
                  <h3>{content.label}</h3>
                  {content.limit ? (
                    <p>Select up to {content.limit}</p>
                  ) : (
                    <p>Others around you liked this</p>
                  )}
                  <mark>{content.required ? "Required" : "Optional"}</mark>
                </article>
                <ul>
                  {content.items.map((option, index) => (
                    <li key={index} className="itemPopup-options-list">
                      <input
                        type="checkbox"
                        id={`${index} ${option.name}`}
                        required={content.required}
                      />
                      <label htmlFor={`${index} ${option.name}`}>
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
                        <strong className="">
                          {typeof option.price === "number"
                            ? `+Tk ${option.price}`
                            : "free"}
                        </strong>
                        <span>
                          {" "}
                          {typeof option.price === "number"
                            ? `Tk ${Math.ceil(
                                option.price + option.price * 0.1
                              )}`
                            : ""}
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
              </form>
            );
          })}
        </Fragment>
      ));
  }, [item.type]);

  //console.log("ItemPopUp:", item.type);
  console.log(cartItems);

  return (
    <section className="popup-container">
      <section className="itemPopup">
        <figure
          className="itemPopup-cross"
          onClick={(e) => {
            e.stopPropagation();
            setIsModalActive(false);
          }}
        >
          <RxCross1 />
        </figure>
        <article className="itemPopup-content">
          <header>
            <h3>{item.name}</h3>
          </header>
          <picture>
            <img style={{ width: "100%" }} src={item.image} alt="" />
          </picture>

          <summary className="itemPopup-description">
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
          <div className="itemPopup-update">
            <button>
              <FaMinus />
            </button>
            <p>1</p>
            <button>
              <FaPlus />
            </button>
          </div>

          <button
            className="btn btn-pink btn-lg"
            onClick={(e) => {
              e.stopPropagation();
              setIsCartEmpty(false);
              setIsModalActive(false);
              handleAddToCart(cartItems, setCartItems, item, restaurantID);
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
