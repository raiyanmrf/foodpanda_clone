import { FaMinus, FaPlus } from "react-icons/fa6";
import { cartContext } from "../../hooks/CartContext";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import {
  findProduct,
  getSimilarProducts,
  handleAddNewProduct,
} from "../../utils/cartLogic";
import {
  handleTemporaryAdding,
  handleTemporaryRemoving,
} from "../../utils/foodItemPopupLogic";

const ItemPopupUpdateButtons = ({ foodItem }) => {
  const { restaurantID } = useParams();
  const { tempItems, setTempItems, sideItems } = useContext(cartContext);

  const product = getSimilarProducts(tempItems, foodItem);
  const args = [tempItems, setTempItems, foodItem, restaurantID, sideItems];
  const args2 = [tempItems, setTempItems, product[0], restaurantID];

  const count = product?.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="itemPopup-update">
      <button
        disabled={product.length === 0}
        onClick={(e) => {
          e.stopPropagation();

          handleTemporaryRemoving(...args2);
        }}
      >
        <FaMinus />
      </button>
      <p>{count ?? "0"}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();

          handleTemporaryAdding(...args);
        }}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default ItemPopupUpdateButtons;
