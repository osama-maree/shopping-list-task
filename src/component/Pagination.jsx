import React from "react";
import { Pagination, Stack } from "@mui/material";

const itemsPerPage = 12;

const PaginationComponent = ({ totalItems, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);
  const handlePageChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <Stack spacing={2} direction="row" justifyContent="center">
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        color="primary"
      />
    </Stack>
  );
};

export default PaginationComponent;
