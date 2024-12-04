import { deepCompare, findProduct } from "./cartLogic";

export const handleTemporaryAdding = (
  tempItems,
  setTempItems,
  foodItem,
  restaurantID,
  sideItems
) => {
  const existingFoodItem = findProduct(
    tempItems,
    foodItem,
    foodItem.sides || sideItems
  );

  const isSameRestaurant = tempItems?.restaurantID === restaurantID;
  const sideItemsPrice = calculateTotalPrice(sideItems);

  if (!isSameRestaurant) {
    const newItems = [
      {
        _id: foodItem._id,
        name: foodItem.name,
        image: foodItem.image,
        price: foodItem.price + sideItemsPrice,
        total: foodItem.price + sideItemsPrice,
        sides: sideItems,
        count: 1,
      },
    ];

    setTempItems({
      restaurantID,
      items: newItems,
      subtotal: foodItem.price + sideItemsPrice,
    });
  } else if (existingFoodItem.length == 0) {
    const newItems = [
      ...tempItems.items,
      {
        _id: foodItem._id,
        name: foodItem.name,
        image: foodItem.image,
        price: foodItem.price + sideItemsPrice,
        total: foodItem.price + sideItemsPrice,
        sides: sideItems,
        count: 1,
      },
    ];

    setTempItems({
      restaurantID,
      items: newItems,
      subtotal: foodItem.price + sideItemsPrice,
    });
  } else {
    const updatedItems = tempItems.items.map((product) => {
      return product._id === foodItem._id &&
        deepCompare(foodItem.sides || sideItems, product.sides)
        ? {
            ...product,
            count: product.count + 1,
            total: product.total + product.price,
          }
        : product;
    });

    setTempItems({
      restaurantID,
      items: updatedItems,
      subtotal: tempItems.subtotal + foodItem.price,
    });
  }
};

export const handleTemporaryRemoving = (
  tempItems,
  setTempItems,
  existingFoodItem,
  restaurantID
) => {
  if (existingFoodItem.count === 1) {
    const updatedItems = tempItems.items.filter(
      (product) => product._id !== existingFoodItem._id
    );

    setTempItems({
      restaurantID,
      items: updatedItems,
      subtotal: tempItems.subtotal - existingFoodItem.price,
    });
  } else {
    const updatedItems = tempItems.items.map((product) =>
      product._id === existingFoodItem._id
        ? {
            ...product,
            total: product.total - product.price,
            count: product.count - 1,
          }
        : product
    );

    setTempItems({
      restaurantID,
      items: updatedItems,
      subtotal: tempItems.subtotal - existingFoodItem.price,
    });
  }
};

export const handleMergingToCartItems = (
  tempItems,
  setTempItems,
  cartItems,
  setCartItems,
  restaurantID
) => {
  if (tempItems.restaurantID === restaurantID) {
    if (cartItems.items.length === 0) {
      console.log("cartItems.items.length === 0");
      setCartItems({
        restaurantID,
        items: tempItems.items,
        subtotal: tempItems.subtotal,
      });
    } else {
      const similarItem = cartItems.items.filter(
        (product) =>
          product._id === tempItems.items[0]._id &&
          deepCompare(product.sides, tempItems.items[0].sides)
      );

      console.log("similarItem", similarItem);

      if (similarItem.length === 0) {
        setCartItems({
          restaurantID,
          items: [...cartItems.items, ...tempItems.items],
          subtotal: tempItems.subtotal,
        });
      } else {
        const updatedItems = cartItems.items.map((item) => {
          {
            return item._id === tempItems.items[0]._id &&
              deepCompare(item.sides, tempItems.items[0].sides || [])
              ? {
                  ...item,
                  total: item.total + tempItems.items[0].total,
                  count: item.count + tempItems.items[0].count,
                }
              : item;
          }
        });

        setCartItems({
          restaurantID,
          items: updatedItems,
          subtotal: cartItems.subtotal + tempItems.subtotal,
        });
      }
    }
    setTempItems({
      restaurantID: "empty",
      items: [],
      subtotal: 0,
    });
  }
};

export const calculateTotalPrice = (arr) => {
  return arr.length > 0 ? arr.reduce((sum, item) => sum + item.price, 0) : 0;
};
