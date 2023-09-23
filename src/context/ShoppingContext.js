import { createContext, useContext, useState } from "react";

const ShoppingContext = createContext();

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
export const useShopping = () => {
  return useContext(ShoppingContext);
};

export default ShoppingProvider;
