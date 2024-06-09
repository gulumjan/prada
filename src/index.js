import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContext from "./context/ProductContext";
import MainRoutes from "./routes/MainRoutes";
import AuthContext from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContext>
      <AuthContext>
        <App />
      </AuthContext>
    </ProductContext>
  </BrowserRouter>
);
