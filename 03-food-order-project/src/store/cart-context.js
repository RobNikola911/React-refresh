import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  cartAdd: (item) => {},
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
