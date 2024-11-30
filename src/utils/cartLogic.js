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
        total: item.price,
        count: 1,
      },
    ];
    setCartItems({
      restaurantID,
      items: newItems,
      subtotal: item.price,
    });
  } else if (findItem.length > 0) {
    const updatedItems = cartItems.items.map((product) =>
      product._id === item._id
        ? {
            ...product,
            total: product.total + product.price,
            count: product.count + 1,
          }
        : product
    );
    setCartItems({
      restaurantID,
      items: updatedItems,
      subtotal: cartItems.subtotal + item.price,
    });
  } else {
    const newItems = [
      ...cartItems.items,
      {
        _id: item._id,
        name: item.name,
        image: item.image,
        price: item.price,
        total: item.price,
        count: 1,
      },
    ];
    setCartItems({
      restaurantID,
      items: newItems,
      subtotal: cartItems.subtotal + item.price,
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
            total: product.total - product.price,
            count: product.count - 1,
          }
        : product
    );
    setCartItems({
      restaurantID,
      items: updatedItems,
      subtotal: cartItems.subtotal - item.price,
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
      subtotal: cartItems.subtotal - item.price,
    });
  }
};
