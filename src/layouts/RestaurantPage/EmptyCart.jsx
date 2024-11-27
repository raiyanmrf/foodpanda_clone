import React, { useState } from "react";

import pandaCart from "../../assets/images/logo/pandaCart.png";

const EmptyCart = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <section className="cart emptyCart">
      <div className="cart-tabs">
        <button
          onClick={() => setIsActive(true)}
          className={`${isActive && "btn-active"}`}
        >
          Delivery
        </button>
        <button
          onClick={() => setIsActive(false)}
          className={`${!isActive && "btn-active"}`}
        >
          Pick Up
        </button>
      </div>

      <div className="cart-empty">
        <img src={pandaCart} width={`120px`} alt="cart" />
        <h3>Hungry?</h3>
        <p>You haven't added anything to your cart!</p>
      </div>

      <footer>
        <summary>
          <p>
            Total <span>(incl. fees and tax)</span>
          </p>
          <p>Tk 0</p>
        </summary>

        <a>See Summary</a>

        <button disabled={true} className="btn btn-pink btn-lg btn-moderate">
          review payment and address
        </button>
      </footer>
    </section>
  );
};

export default EmptyCart;
