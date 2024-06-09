import React, { useState } from "react";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import AdminPanel from "../admin/AdminPanel";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { AccountCircle } from "@mui/icons-material";
import { Avatar, Tooltip } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import { USER } from "../../helpers/const";

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, logOutProfile } = useAuth();
  console.log(user);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header>
      <div className="container">
        <div className="header">
          <h1>PRADA</h1>

          <nav>
            <ul style={{ display: "flex", gap: "24px" }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="/list">Brand Products</a>
              </li>
              <li>
                <Link to="/women">Women</Link>
              </li>
              <li>
                <a href="/men">Men</a>
              </li>
              <li>
                <Link to="/bag">Bags</Link>
              </li>
              <li>
                <a href="/gifts">Gifts</a>
              </li>
              <li>
                <a href="/shoes">Shoes</a>
              </li>
              <li>
                <a href="/perfume">Perfume</a>
              </li>
              <li>
                <a href="/jewelery">Jewelery</a>
              </li>
              <li>
                <a href="/accessories">Accessories</a>
              </li>
            </ul>
          </nav>

          <div style={{ display: "flex", gap: "12px" }} className="icons">
            <button
              style={{ border: "none", background: "none" }}
              className="icon"
            >
              <SearchIcon sx={{ width: 33, height: 40 }} />
            </button>
            <button
              style={{ border: "none", background: "none" }}
              className="icon"
            >
              <ShoppingCartIcon sx={{ width: 33, height: 40 }} />
            </button>
            <div>
              {user ? (
                <div style={{ display: "flex", gap: "4px" }}>
                  <button
                    onClick={() => logOutProfile()}
                    style={{ background: "none", border: "none" }}
                  >
                    <ExitToAppRoundedIcon sx={{ marginTop: 1 }} />
                  </button>
                  <Tooltip title={user.displayName}>
                    <Avatar
                      sx={{ width: 33, height: 40 }}
                      alt={user.displayName}
                      src={user.photoURL}
                    />
                  </Tooltip>
                </div>
              ) : (
                <button
                  style={{ background: "none", border: "none" }}
                  onClick={handleMenu}
                >
                  {" "}
                  <AccountCircle sx={{ width: 33, height: 40 }} />
                </button>
              )}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    navigate("/signUp");
                  }}
                >
                  Sign up
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    navigate("/signIn");
                  }}
                >
                  Sign in
                </MenuItem>
              </Menu>
            </div>
            {user
              ? USER.map((el) =>
                  user.email === el.email ? (
                    <button
                      style={{ background: "none", border: "none" }}
                      onClick={() => navigate("/add")}
                    >
                      <AdminPanel />
                    </button>
                  ) : (
                    "error"
                  )
                )
              : null}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
