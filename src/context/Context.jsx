import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartState = () => {
  return useContext(CartContext);
};

export default Context;
