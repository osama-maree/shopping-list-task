import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import ProductListItem from "../component/ProductListItem.jsx";
import { useShopping } from "../context/ShoppingContext.js";
import TransitionsModal from "../component/ModalForm.jsx";
const Order = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { order, setOrder } = useShopping();

  const handleRemove = (id) => {
    setOrder(order.filter((ord) => ord.id !== id));
  };
  let TotalAmmount = order.reduce((accumulator, product) => {
    const { quantity, price } = product;
    return accumulator + quantity * price;
  }, 0);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        my={3}
      >
        <Typography sx={{ color: "#00acc1" }} variant="h4" gutterBottom>
          Orders Details
        </Typography>
        <Button
          variant="outlined"
          sx={{ color: "#00acc1", border: "solid 1px #00acc1" }}
        >
          Total Price: {TotalAmmount}
        </Button>
      </Box>
      <Divider />
      {order.length > 0 ? (
        order.map((product, index) => (
          <ProductListItem
            key={index}
            {...product}
            handleRemove={handleRemove}
          />
        ))
      ) : (
        <Alert
          severity="error"
          sx={{
            margin: "1rem 0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Please Add Item To Your Cart!&#128516;
        </Alert>
      )}
      {order.length > 0 && (
        <Button
          onClick={handleOpen}
          variant="contained"
          sx={{
            backgroundColor: "#00acc1",
            "&:hover": { backgroundColor: "#00acc1" },
            marginBottom: "1rem",
          }}
        >
          Submit
        </Button>
      )}
      <TransitionsModal open={open} handleClose={handleClose} />
    </Container>
  );
};

export default Order;
