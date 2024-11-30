import React, { useContext, useEffect, useState } from "react";
import { LiaMinusSolid, LiaPlusSolid } from "react-icons/lia";
import { useParams } from "react-router-dom";
import { cartContext } from "../../hooks/CartContext";
import {
  handleAddToCart,
  handleRemoveItem,
  handleDecreaseItem,
} from "../../utils/cartLogic";
import { MdOutlineDelete } from "react-icons/md";

const SpecialCartBtns = ({ item }) => {
  const { restaurantID } = useParams();
  const { cartItems, setCartItems } = useContext(cartContext);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    let id; // Declare `id` here to avoid undefined issues

    if (isExpanded) {
      id = setTimeout(() => {
        setIsExpanded(false); // Collapse after 1 second
      }, 3000);
    }

    return () => {
      if (id) {
        clearTimeout(id); // Clear timeout when effect cleans up
      }
    };
  }, [isExpanded]);

  // Dynamic function to fetch the current product from cart
  const getProduct = () =>
    cartItems.items.find((product) => product._id === item._id);

  // Event handlers using the dynamic product count
  const handleAdd = (e) => {
    e.stopPropagation();
    handleAddToCart(cartItems, setCartItems, item, restaurantID);
    setIsExpanded(true);
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    const product = getProduct();
    if (product?.count < 2) {
      handleRemoveItem(cartItems, setCartItems, item, restaurantID);
      setIsExpanded(false);
    } else {
      handleDecreaseItem(cartItems, setCartItems, item, restaurantID);
      setIsExpanded(true);
    }
  };

  // Get the product for the initial render
  const product = getProduct();
  const removeIcon =
    product?.count < 2 ? <MdOutlineDelete /> : <LiaMinusSolid />;
  if (product) {
    return (
      <div className="specialCartBtns">
        {isExpanded ? (
          <>
            <button onClick={handleRemove}>{removeIcon}</button>
            <p className="specialCartBtns-count">{product.count}</p>
            <button onClick={handleAdd}>{<LiaPlusSolid />}</button>
          </>
        ) : (
          <button onClick={handleAdd} style={{ backgroundColor: "black" }}>
            <p style={{ color: "white" }} className="specialCartBtns-count">
              {product.count}
            </p>
          </button>
        )}
      </div>
    );
  }
  return (
    <div className="specialCartBtns">
      <button onClick={handleAdd}>
        <LiaPlusSolid />
      </button>
    </div>
  );
};

export default SpecialCartBtns;
