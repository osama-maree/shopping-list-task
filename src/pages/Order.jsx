import { Container, Divider, Typography } from "@mui/material";
import React from "react";
import ProductListItem from "../component/ProductListItem.jsx";
import { useShopping } from "../context/ShoppingContext.js";

const Order = () => {
  const { order } = useShopping();
  return (
    <Container>
      <Typography sx={{ color: "#00acc1" }} mt={4} variant="h4" gutterBottom>
        Orders Details
      </Typography>
      <Divider />
      {order.map((product, index) => (
        <ProductListItem key={index} {...product} />
      ))}
    </Container>
  );
};

export default Order;
