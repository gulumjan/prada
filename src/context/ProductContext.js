import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { createContext, useContext, useReducer, useState } from "react";
import { db } from "../firebase";
import { ACTION } from "../helpers/const";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  data: [],
  oneProduct: {},
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION.GET:
      return { ...state, data: action.payload };
    case "GET_ONE":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
};
const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const productCollectionRef = collection(db, "data");
  const [newData, setNewData] = useState([]);
  async function addProduct(newProduct) {
    await addDoc(productCollectionRef, newProduct);
  }
  async function readProduct() {
    let data = await getDocs(productCollectionRef);
    data = data.docs.map((el) => ({ ...el.data(), id: el.id }));
    setNewData(data);
    dispatch({
      type: ACTION.GET,
      payload: data,
    });
  }

  //PAGINATION
  const [page, setPage] = useState(1);
  let itemPerPage = 8;
  let count = Math.ceil(state.data.length / itemPerPage);

  function currentPage() {
    let start = (page - 1) * itemPerPage;
    let end = start + itemPerPage;
    return state.data.slice(start, end);
  }

  //PAGINATION

  async function deleteProduct(id) {
    let productRef = doc(db, "data", id);
    await deleteDoc(productRef, id);
    readProduct();
  }
  // async function getOneProduct(id) {
  //   let productRef = doc(db, "data", id);
  //   let data = await getDoc(productRef);

  //   console.log({ ...data.data() }, "oneProduct");
  //   dispatch({
  //     type: "GET_ONE",
  //     payload: data,
  //   });
  // }

  async function getOneProduct(id) {
    let productRef = doc(db, "data", id);
    let data = await getDoc(productRef, id);
    data = { ...data.data(), id: data.id };
    dispatch({
      type: "GET_ONE",
      payload: data,
    });
    console.log(data, "OneProduct");
  }
  async function editProduct(id, editedProduct) {
    let productRef = doc(db, "data", id);
    await updateDoc(productRef, editedProduct);
    readProduct();
  }

  function filterBag() {
    let data = newData.filter((el) => el.type === "bag");
    dispatch({
      type: "GET",
      payload: data,
    });
  }

  function filterPerfume() {
    let data = newData.filter((el) => el.type === "perfume");
    dispatch({
      type: "GET",
      payload: data,
    });
  }

  function filterGifts() {
    let data = newData.filter((el) => el.type === "gift");
    dispatch({
      type: "GET",
      payload: data,
    });
  }
  function filterShoes() {
    let data = newData.filter((el) => el.type === "shoes");
    dispatch({
      type: "GET",
      payload: data,
    });
  }
  function filterJewelery() {
    let data = newData.filter((el) => el.type === "jewelery");
    dispatch({
      type: "GET",
      payload: data,
    });
  }
  function filterAccessories() {
    let data = newData.filter((el) => el.type === "accessories");
    dispatch({
      type: "GET",
      payload: data,
    });
  }
  function genderWfilter() {
    let data = newData.filter((el) => el.gender === "women");
    dispatch({
      type: "GET",
      payload: data,
    });
  }

  function genderMfilter() {
    let data = newData.filter((el) => el.gender === "men");
    dispatch({
      type: "GET",
      payload: data,
    });
  }

  const values = {
    addProduct,
    readProduct,
    data: state.data,
    deleteProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
    filterBag,
    genderWfilter,
    genderMfilter,
    filterPerfume,
    currentPage,
    count,
    setPage,
    editProduct,
    filterAccessories,
    filterGifts,
    filterJewelery,
    filterShoes,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
