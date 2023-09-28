import { createContext, useState } from "react";

export const ShoppingContext = createContext();

const ShoppingProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  return (
    <ShoppingContext.Provider
      value={{
        order,
        setOrder,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingProvider;
