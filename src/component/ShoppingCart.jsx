import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";
import PaginationComponent from "./Pagination.jsx";
import { useShopping } from "../context/ShoppingContext.js";

const ShoppingCart = ({ products }) => {
  const { order, setOrder } = useShopping();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = products.slice(startIndex, endIndex);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Box>
      <Grid container spacing={1} mb={2}>
        {currentData.map((product, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            md={3}
          >
            <ProductCard {...product} />
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
