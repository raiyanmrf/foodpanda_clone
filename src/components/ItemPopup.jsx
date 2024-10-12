import React from "react";
import { RxCross1 } from "react-icons/rx";
import dummyImg from "../../public/images/items/dummyItem.jpg";

const ItemPopup = () => {
  return (
    <section className="popup-container">
      <section className="popup-item">
        <figure className="popup-item-cross">
          <RxCross1 />
        </figure>

        <article className="popup-item-content">
          <picture>
            <img style={{ width: "100%" }} src={dummyImg} alt="" />
          </picture>

          <summary className="popup-item-descriptiom">
            <h2>Chicken Chedarolla</h2>
            <h2>
              <strong>Tk 256</strong>
              <span>Tk 284</span>
              <span>10% off</span>
            </h2>

            <p>
              1 pc - Wrapped with house special sauce, chili sauce, french
              fries, mozzarella cheese, spicy chicken, sausage & cheese
            </p>
          </summary>

          <div className="popup-item-selection">
            <h2>Dips</h2>
            <p>Select up to optional</p>

            <ul>
              <li>
                <input type="checkbox" name="selectItem" id="" />
                <label htmlFor="selecItem">Tatar Sauce</label>
                <p>
                  <strong>+Tk 29</strong>
                  <span>Tk 32</span>
                </p>
              </li>
            </ul>
          </div>

          <div className="popup-item-orderActions">
            <article>
              <h2>Special instructions</h2>
              <p>
                Special requests are subject to the restaurant's approval. Tell
                us here!
              </p>
              <textarea name="" id="" placeholder="e.g. No Mayo"></textarea>
            </article>
            <article>
              <h2>If this item is not available</h2>
              <select name="" id="">
                <option value="">Remove From my order</option>
                <option value="">Call me</option>
              </select>
            </article>
          </div>
        </article>

        <footer>
          <div className="popup-item-update">
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>

          <button className="btn btn-pink btn-lg">Add to cart</button>
        </footer>
      </section>
    </section>
  );
};

export default ItemPopup;
