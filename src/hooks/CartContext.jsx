import { createContext, useState } from "react";

export const cartContext = createContext(null);

import React from "react";

export const CartContext = (props) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState({
    restaurantID: "empty",
    items: [],
    subtotal: 0,
  });

  const value = {
    showCart,
    setShowCart,

    cartItems,
    setCartItems,
  };
  return (
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  );
};
