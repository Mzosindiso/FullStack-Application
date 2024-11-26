import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    console.log("Adding to cart:", item); // Debug log
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        console.log("Item already in cart, updating quantity"); // Debug log
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      console.log("New item added to cart"); // Debug log
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateCartItem = (updatedItem) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  console.log("Current cart:", cart); // Debug log

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateCartItem, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};