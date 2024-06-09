import React from "react";
import { useProduct } from "../context/ProductContext";
import Pagination from "@mui/material/Pagination";

const PaginationProduct = () => {
  const { count, setPage } = useProduct();

  function handlePage(p, n) {
    setPage(n);
  }
  return <Pagination onChange={handlePage} count={count} color="secondary" />;
};

export default PaginationProduct;
