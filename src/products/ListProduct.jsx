import React, { useEffect } from "react";
import { useProduct } from "../context/ProductContext";
import CartProduct from "../components/cart/CartProduct";
import { Box } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import "./ListProduct.scss";
import PaginationProduct from "../pagination/PaginationProduct";

const ListProduct = () => {
  const {
    readProduct,
    data,
    filterBag,
    genderWfilter,
    genderMfilter,
    currentPage,
    filterAccessories,
    filterGifts,
    filterJewelery,
    filterShoes,
    filterPerfume,
  } = useProduct();
  const { id } = useParams();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/bag") {
      filterBag();
    } else if (location.pathname === "/gifts") {
      filterGifts();
    } else if (location.pathname === "/perfume") {
      filterPerfume();
    } else if (location.pathname === "/jewelery") {
      filterJewelery();
    } else if (location.pathname === "/shoes") {
      filterShoes();
    } else if (location.pathname === "/accessories") {
      filterAccessories();
    } else if (location.pathname === "/women") {
      genderWfilter();
    } else if (location.pathname === "/men") {
      genderMfilter();
    } else {
      readProduct();
    }
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "140px",
          gap: "28px",
        }}
      >
        {data.length > 0 ? (
          currentPage().map((el, index) => <CartProduct key={index} el={el} />)
        ) : (
          <div className="loader"></div>
        )}
      </Box>
      <PaginationProduct />
    </>
  );
};

export default ListProduct;
