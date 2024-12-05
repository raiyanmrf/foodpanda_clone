import { calculateTotalPrice } from "./foodItemPopupLogic";

export const handleAddNewProduct = (
  cartItems,
  setCartItems,
  newProduct,
  restaurantID,
  sideItems
) => {
  console.log("sideItems", sideItems);
  const existingProduct = findProduct(
    cartItems,
    newProduct,
    newProduct.sides || sideItems
  );

  const isSameRestaurant = cartItems.restaurantID === restaurantID;
  const sideItemsPrice = calculateTotalPrice(sideItems);

  if (!isSameRestaurant) {
    const newItems = [
      {
        _id: newProduct._id,
        name: newProduct.name,
        image: newProduct.image,
        price: newProduct.price + sideItemsPrice,
        total: newProduct.price + sideItemsPrice,
        sides: sideItems,
        count: 1,
      },
    ];

    setCartItems({
      restaurantID,
      items: newItems,
      subtotal: newProduct.price,
    });
  } else if (existingProduct.length === 0) {
    const newItems = [
      ...cartItems.items,
      {
        _id: newProduct._id,
        name: newProduct.name,
        image: newProduct.image,
        price: newProduct.price + sideItemsPrice,
        total: newProduct.price + sideItemsPrice,
        sides: sideItems,
        count: 1,
      },
    ];

    setCartItems({
      restaurantID,
      items: newItems,
      subtotal: cartItems.subtotal + newProduct.price + sideItemsPrice,
    });
  } else {
    const updatedItems = cartItems.items.map((product) =>
      product._id === newProduct._id &&
      deepCompare(newProduct.sides || sideItems, product.sides)
        ? {
            ...product,
            count: product.count + 1,
            total: product.total + product.price,
          }
        : product
    );

    setCartItems({
      restaurantID,
      items: updatedItems,
      subtotal: cartItems.subtotal + newProduct.price,
    });
  }
};
export const handleIncreaseProduct = (
  cartItems,
  setCartItems,
  newProduct,
  restaurantID
) => {
  const updatedItems = cartItems.items.map((product) =>
    product._id === newProduct._id &&
    deepCompare(newProduct.sides, product.sides)
      ? {
          ...product,
          count: product.count + 1,
          total: product.total + product.price,
        }
      : product
  );

  setCartItems({
    restaurantID,
    items: updatedItems,
    subtotal: cartItems.subtotal + newProduct.price,
  });
};
export const handleDecreaseItem = (
  cartItems,
  setCartItems,
  existingItem,
  restaurantID
) => {
  const filteredItems = findProduct(
    cartItems,
    existingItem,
    existingItem.sides
  );
  if (filteredItems.length === 1) {
    console.log("filteredItems.length === 1");
    if (filteredItems[0].count === 1) {
      console.log("filteredItems[0].count === 1");
      const updatedItems = cartItems.items.filter(
        (product) =>
          !(
            product._id === existingItem._id &&
            deepCompare(existingItem.sides, product.sides)
          )
      );

      setCartItems({
        restaurantID,
        items: updatedItems,
        subtotal: cartItems.subtotal - existingItem.price,
      });
    } else {
      const updatedItems = cartItems.items.map((product) =>
        product._id === existingItem._id &&
        deepCompare(existingItem.sides, product.sides)
          ? {
              ...product,
              total: product.total - product.price,
              count: product.count - 1,
            }
          : product
      );
      console.log("updatedItems", updatedItems);
      setCartItems({
        restaurantID,
        items: updatedItems,
        subtotal: cartItems.subtotal - existingItem.price,
      });
    }
  }
};

export const deepCompare = (arr1, arr2) => {
  if (arr1.length != arr2.length) return false;
  if (arr1.length === 0) return true;
  const sortArray = (arr) => {
    return arr.map((item) => JSON.stringify(item)).sort();
  };

  const sorted1 = sortArray(arr1);
  const sorted2 = sortArray(arr2);

  return JSON.stringify(sorted1) === JSON.stringify(sorted2);
};

export const getSimilarProducts = (cartItems, newProduct) => {
  return cartItems.items?.filter((product) => product._id === newProduct._id);
};

export const findProduct = (cartItems, newProduct, sideItems) => {
  // console.log("tempItems", cartItems);
  // console.log("existingFoodItems", newProduct);
  // console.log("existingFoodItems.sides", sideItems);
  return getSimilarProducts(cartItems, newProduct).filter((product) =>
    deepCompare(sideItems, product.sides)
  );
};
