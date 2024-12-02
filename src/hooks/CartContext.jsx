import { createContext, useRef, useState } from "react";

export const cartContext = createContext(null);

import React from "react";

export const CartContextComponent = (props) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState({
    restaurantID: "empty",
    items: [],
    subtotal: 0,
  });
  const toUncheckRef = useRef(null);

  const [sideItems, setSideItems] = useState([]);

  const uncheckAll = () => {
    console.log("Uncheck all triggered");
    const checkboxes = toUncheckRef.current.querySelectorAll(
      'input[type="checkbox"]'
    );
    console.log(checkboxes);
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  const value = {
    showCart,
    setShowCart,

    cartItems,
    setCartItems,

    sideItems,
    setSideItems,

    toUncheckRef,
    uncheckAll,
  };
  return (
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  );
};
