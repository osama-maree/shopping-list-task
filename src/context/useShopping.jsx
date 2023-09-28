import { useContext } from "react";
import { ShoppingContext } from "./ShoppingContext.js";

export default function useShopping() {
  const context = useContext(ShoppingContext);
  if (!context) {
    throw new Error(
      "useShopping must be used within a ShoppingContextProvider"
    );
  }
  return context;
}
