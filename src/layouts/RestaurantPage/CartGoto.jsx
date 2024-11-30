import React, { useContext } from "react";
import { CiForkAndKnife } from "react-icons/ci";
import { cartContext } from "../../hooks/CartContext";

const CartGoto = () => {
  const { showCart, setShowCart } = useContext(cartContext);
  return (
    <section className={`cart-goto ${showCart && "hide-cart"}`}>
      <button
        className="btn btn-flex btn-pink btn-lg btn-moderate"
        onClick={(e) => {
          e.stopPropagation();
          setShowCart(true);
        }}
      >
        <figure>
          <CiForkAndKnife /> <p>1</p>
        </figure>

        <p>View Cart</p>

        <p>Tk 648</p>
      </button>
    </section>
  );
};

export default CartGoto;
