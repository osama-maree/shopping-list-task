import { Container, Divider, Typography } from "@mui/material";
import React from "react";
import ProductListItem from "../component/ProductListItem.jsx";
import { useShopping } from "../context/ShoppingContext.js";

const Order = () => {
  const { order, setOrder } = useShopping();
  const handleRemove = (id) => {
    setOrder(order.filter((ord) => ord.id !== id));
  };
  return (
    <Container>
      <Typography sx={{ color: "#00acc1" }} mt={4} variant="h4" gutterBottom>
        Orders Details
      </Typography>
      <Divider />
      {order.map((product, index) => (
        <ProductListItem key={index} {...product} handleRemove={handleRemove} />
      ))}
    </Container>
  );
};

export default Order;
