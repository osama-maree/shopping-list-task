import React from "react";
import ShoppingCart from "../component/ShoppingCart.jsx";
import { Box } from "@mui/material";
import { products } from "../data/product.js";
const Home = () => {
  return (
    <Box maxWidth="95%" margin="auto" my={3}>
      <ShoppingCart products={products} />
    </Box>
  );
};

export default Home;
