import React, { useEffect } from "react";
import Form from "../components/form/Form";
import { useProduct } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { getOneProduct } = useProduct();
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  return <Form isEdit={true} />;
};

export default EditProduct;
