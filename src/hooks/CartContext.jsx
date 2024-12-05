import { createContext, useRef, useState } from "react";

export const cartContext = createContext(null);

import React from "react";

export const CartContextComponent = (props) => {
  const [showCart, setShowCart] = useState(false);
  const [isItemPopupActive, setIsItemPopupActive] = useState(false);
  const [cartItems, setCartItems] = useState({
    restaurantID: "empty",
    items: [],
    subtotal: 0,
  });
  const toUncheckRef = useRef(null);

  const [currentItem, setCurrentItem] = useState({});
  const [sideItems, setSideItems] = useState([]);
  const [tempItems, setTempItems] = useState({
    restaurantID: "empty",
    items: [],
    subtotal: 0,
  });

  const value = {
    currentItem,
    setCurrentItem,

    showCart,
    setShowCart,

    cartItems,
    setCartItems,

    sideItems,
    setSideItems,

    tempItems,
    setTempItems,

    isItemPopupActive,
    setIsItemPopupActive,
  };
  return (
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  );
};
