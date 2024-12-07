import React, { useContext } from "react";
import { CiForkAndKnife } from "react-icons/ci";
import { cartContext } from "../../hooks/CartContext";
import { getTotalCartItemsCount } from "../../utils/cartLogic";

const CartGoto = () => {
  const { showCart, setShowCart, cartItems } = useContext(cartContext);
  const subtotal = cartItems.subtotal;
  const count = getTotalCartItemsCount(cartItems);
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
          <CiForkAndKnife /> <p>{count}</p>
        </figure>

        <p>View Cart</p>

        <p>Tk {subtotal}</p>
      </button>
    </section>
  );
};

export default CartGoto;
