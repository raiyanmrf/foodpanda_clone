import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import dummyImg from "../../public/images/items/dummyItem.jpg";
import { FaCheckSquare } from "react-icons/fa";
import { FaAngleDown, FaAngleUp, FaMinus, FaPlus } from "react-icons/fa6";
import useIsActive from "../hooks/useIsActive";

const ItemPopup = () => {
  const [isDropActive, handleIsDropActive, handleInnerText] = useIsActive();
  const [text, setText] = useState("Remove from my order");

  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <section className="popup-container">
      <section className="popup-item">
        <figure className="popup-item-cross">
          <RxCross1 />
        </figure>
        <article className="popup-item-content">
          <header>
            <h3>Chicken Chedarollas</h3>
          </header>
          <picture>
            <img style={{ width: "100%" }} src={dummyImg} alt="" />
          </picture>

          <summary className="popup-item-description">
            <h3>Chicken Chedarolla</h3>
            <h3>
              <strong>Tk 256</strong>
              <span>Tk 284</span>
              <span>10% off</span>
            </h3>

            <p className="">
              {" "}
              1 pc - Wrapped with house special sauce, chili sauce, french
              fries, mozzarella cheese, spicy chicken, sausage & cheese
            </p>
          </summary>

          <div className="popup-item-selection">
            <summary>
              <h3>Dips</h3>
              <p>Select up to 2</p>
              <span>Optional</span>
            </summary>

            <ul>
              <li>
                <input type="checkbox" id="selectItems" />
                <label htmlFor="selectItems">
                  <FaCheckSquare />
                </label>
                <p>Tatar Sauce</p>
                <p>
                  <strong>+Tk 29</strong>
                  <span>Tk 32</span>
                </p>
              </li>
              <li>
                <input type="checkbox" id="gg" />
                <label htmlFor="gg">
                  <FaCheckSquare />
                </label>
                <p>Tatar Sauce</p>
                <p>
                  <strong>+Tk 29</strong>
                  <span>Tk 32</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="popup-item-suggestion">
            <summary>
              <h3>Frequently bought together</h3>
              <p>Others around you liked this</p>
              <span>Optional</span>
            </summary>

            <ul>
              <li>
                <input type="checkbox" id="selectItems" />
                <label htmlFor="selectItems">
                  <FaCheckSquare />
                </label>
                <img src={dummyImg} width={"40px"} height={"40px"} alt="" />
                <p>Tatar Sauce</p>
                <p>
                  <strong>+Tk 29</strong>
                  <span>Tk 32</span>
                </p>
              </li>
              <li>
                <input type="checkbox" id="gg" />
                <label htmlFor="gg">
                  <FaCheckSquare />
                </label>
                <p>Tatar Sauce</p>
                <p>
                  <strong>+Tk 29</strong>
                  <span>Tk 32</span>
                </p>
              </li>
            </ul>
          </div>

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
              <div className=" popup-item-selector">
                <div
                  className=" popup-item-selector-box"
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
