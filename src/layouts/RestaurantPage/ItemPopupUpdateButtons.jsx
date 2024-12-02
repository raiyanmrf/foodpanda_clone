import { FaMinus, FaPlus } from "react-icons/fa6";
import { cartContext } from "../../hooks/CartContext";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { getSimilarProducts, handleAddNewProduct } from "../../utils/cartLogic";

const ItemPopupUpdateButtons = ({ foodItem }) => {
  const { restaurantID } = useParams();
  const { cartItems, setCartItems, sideItems, setSideItems, uncheckAll } =
    useContext(cartContext);

  const args = [cartItems, setCartItems, foodItem, restaurantID, sideItems];
  const product = getSimilarProducts(cartItems, foodItem);

  const count =
    product.length > 0
      ? product.reduce((sum, item) => sum + item.count, 0)
      : "1";

  return (
    <div className="itemPopup-update">
      <button>
        <FaMinus />
      </button>
      <p>{count}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();

          handleAddNewProduct(...args);
          uncheckAll();
          setSideItems([]);
        }}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default ItemPopupUpdateButtons;
