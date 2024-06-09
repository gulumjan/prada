import React from "react";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import { Route, Routes } from "react-router-dom";
import EditPage from "../pages/EditPage";
import ListProduct from "../products/ListProduct";
import Bagproduct from "../components/separation/Bagproduct";
import WomenProducts from "../components/gender/WomenProducts";
import MenProducts from "../components/gender/MenProducts";
import Login from "../authentification/Login";
import Register from "../authentification/Register";
import DetailsPage from "../pages/DetailsPage";
import NotFoundPage from "../pages/NotFoundPage";
import GiftProduct from "../components/separation/GiftProduct";
import ShoesProduct from "../components/separation/ShoesProduct";
import PerfumeProduct from "../components/separation/PerfumeProduct";
import JeweleryProduct from "../components/separation/JeweleryProduct";
import AccessoriesProduct from "../components/separation/AccessoriesProduct";

const MainRoutes = () => {
  const MY_ROYTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/add",
      element: <AdminPage />,
      id: 2,
    },
    {
      link: "/edit/:id",
      element: <EditPage />,
      id: 3,
    },
    {
      link: "/list",
      element: <ListProduct />,
      id: 4,
    },
    {
      link: "/signIn",
      element: <Login />,
      id: 5,
    },
    {
      link: "/signUp",
      element: <Register />,
      id: 6,
    },

    {
      link: "/women",
      element: <WomenProducts />,
      id: 7,
    },
    {
      link: "/men",
      element: <MenProducts />,
      id: 8,
    },
    {
      link: "/bag",
      element: <Bagproduct />,
      id: 9,
    },
    {
      link: "/details/:id",
      element: <DetailsPage />,
      id: 10,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 11,
    },
    {
      link: "/gifts",
      element: <GiftProduct />,
      id: 12,
    },
    {
      link: "/shoes",
      element: <ShoesProduct />,
      id: 13,
    },
    {
      link: "/perfume",
      element: <PerfumeProduct />,
      id: 14,
    },
    {
      link: "/jewelery",
      element: <JeweleryProduct />,
      id: 15,
    },
    {
      link: "/accessories",
      element: <AccessoriesProduct />,
      id: 16,
    },
  ];
  return (
    <Routes>
      {MY_ROYTES.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
