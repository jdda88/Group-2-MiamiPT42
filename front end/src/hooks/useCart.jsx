import React, { useState } from "react";
import { actionTypes } from "../context/Reducer";
import { useStateValue } from "../context/stateProvider";

export const useCart = (initialValue = []) => {
  const [{ bag }, dispatch] = useStateValue();
  const [cart, setCart] = useState(initialValue);

  const addToCart = (item) => {
    setCart([...cart, item]);
    dispatch({
      type: actionTypes.ADD_TO_BAG,
      product: {
        id: item.id,
        name: item.title,
        category: item.category,
        description: item.description,
        price: item.price,
        image: item.image,
      },
    });
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((i) => i !== item));
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  };

  return [cart, addToCart, removeFromCart, getTotal];
};