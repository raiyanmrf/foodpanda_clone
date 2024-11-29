export const handleAddToCart = (
  cartItems,
  setCartItems,
  item,
  restaurantID
) => {
  const findItem = cartItems.items?.filter(
    (product) => product._id === item._id
  );

  if (cartItems.restaurantID !== restaurantID) {
    const newItems = [
      {
        _id: item._id,
        name: item.name,
        image: item.image,
        price: item.price,
        count: 1,
      },
    ];
    setCartItems({
      restaurantID,
      items: newItems,
    });
  } else if (findItem.length > 0) {
    const updatedItems = cartItems.items.map((product, index) =>
      product._id === item._id
        ? {
            ...product,
            price: product.price * (product.count + 1),
            count: product.count + 1,
          }
        : product
    );
    setCartItems({
      restaurantID,
      items: updatedItems,
    });
  } else {
    const newItems = [
      ...cartItems.items,
      {
        _id: item._id,
        name: item.name,
        image: item.image,
        price: item.price,
        count: 1,
      },
    ];
    setCartItems({
      restaurantID,
      items: newItems,
    });
  }
};
export const handleDecreaseItem = (
  cartItems,
  setCartItems,
  item,
  restaurantID
) => {
  const findItem = cartItems.items?.filter(
    (product) => product._id === item._id
  );

  if (findItem.length > 0) {
    const updatedItems = cartItems.items.map((product) =>
      product._id === item._id
        ? {
            ...product,
            price: product.price / product.count,
            count: product.count - 1,
          }
        : product
    );
    setCartItems({
      restaurantID,
      items: updatedItems,
    });
  }
};

export const handleRemoveItem = (
  cartItems,
  setCartItems,
  item,
  restaurantID
) => {
  const findItem = cartItems.items?.filter(
    (product) => product._id === item._id
  );

  if (findItem.length > 0) {
    const updatedItems = cartItems.items.filter(
      (product) => product._id !== item._id
    );
    setCartItems({
      restaurantID,
      items: updatedItems,
    });
  }
};
