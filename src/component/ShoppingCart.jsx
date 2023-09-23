import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";
import PaginationComponent from "./Pagination.jsx";
import { useShopping } from "../context/ShoppingContext.js";

const ShoppingCart = ({ products }) => {
  const { setOrder, order } = useShopping();
  const [currentPage, setCurrentPage] = useState(1);
  const [product, setProduct] = useState(products);
  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  let currentData = product.slice(startIndex, endIndex);
  useEffect(() => {
    currentData = product.slice(startIndex, endIndex);
  }, [product]);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleQuantityInc = (index) => {
    setProduct(
      product.map((prod) =>
        prod.id === index
          ? { ...prod, quantity: prod.quantity == 0 ? 1 : prod.quantity + 1 }
          : { ...prod }
      )
    );
  };
  const handleQuantityDec = (index) => {
    setProduct(
      product.map((prod) =>
        prod.id === index
          ? { ...prod, quantity: prod.quantity == 0 ? 0 : prod.quantity - 1 }
          : { ...prod }
      )
    );
  };
  const handleAddToCart = (index) => {
    const productQuantity = product.find((prod) => prod.id === index);
    if (productQuantity.quantity === 0) return;
    const isFound = order?.find((prod) => prod?.id === index);
    if (isFound) {
      setOrder(
        order.map((prod) =>
          prod.id === index
            ? { ...prod, quantity: productQuantity.quantity }
            : { ...prod }
        )
      );
    } else {
      setOrder((prev) => [...prev, productQuantity]);
    }
  };
  return (
    <Box>
      <Grid container spacing={1} mb={2}>
        {currentData.map((product) => (
          <Grid
            item
            key={product.id}
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            md={3}
          >
            <ProductCard
              {...product}
              setOrder={setOrder}
              handleQuantityInc={handleQuantityInc}
              handleQuantityDec={handleQuantityDec}
              handleAddToCart={handleAddToCart}
            />
          </Grid>
        ))}
      </Grid>
      <PaginationComponent
        totalItems={products.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Box>
  );
};

export default ShoppingCart;
