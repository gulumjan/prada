import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  Menu,
  MenuItem,
  Skeleton,
  Typography,
} from "@mui/material";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

import React, { useState } from "react";
import { useProduct } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";
import { USER } from "../../helpers/const";
import { useAuth } from "../../context/AuthContext";

const CartProduct = ({ el }) => {
  const { deleteProduct } = useProduct();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  return (
    <>
      {isLoading ? (
        <div>
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width={280}
            height={318}
          />
        </div>
      ) : (
        <Card sx={{ width: "310px", minHeight: "410px", borderRadius: "20px" }}>
          <CardHeader
            action={
              <div>
                <Menu
                  id="menu-appbar"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem>
                    <AppRegistrationIcon />
                  </MenuItem>
                  <MenuItem>
                    <DeleteSweepIcon />
                  </MenuItem>
                </Menu>
              </div>
            }
            title={el.name}
            sx={{ cursor: "context-menu" }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                width: "216px",
                height: "230px",
                objectFit: "cover",
              }}
              src={
                // // {el.image}
                // el.image === "" || !el.image.includes("") ? imgNot : el.image
                el.image
              }
              alt={el.name}
            />
          </Box>

          <CardContent>
            <Typography sx={{ fontSize: "24px" }}>{el.price}$</Typography>
          </CardContent>
          <CardActions disableSpacing>
            {user
              ? USER.map((element) =>
                  user.email === element.email ? (
                    <IconButton
                      sx={{ color: "#181818" }}
                      onClick={() => deleteProduct(el.id)}
                      aria-label="add to favorites"
                    >
                      <DeleteSweepIcon />
                    </IconButton>
                  ) : (
                    console.log("error")
                  )
                )
              : null}

            {user
              ? USER.map((element) =>
                  user.email === element.email ? (
                    <IconButton
                      sx={{ color: "#181818" }}
                      onClick={() => navigate(`/edit/${el.id}`)}
                      aria-label="share"
                    >
                      <AppRegistrationIcon />
                    </IconButton>
                  ) : (
                    "error"
                  )
                )
              : null}

            <Button
              sx={{
                background: "#181818",
                "&:hover": { background: "#181818" },
              }}
              variant="contained"
            >
              Buy
            </Button>
          </CardActions>
          <Collapse timeout="auto" unmountOnExit></Collapse>
        </Card>
      )}
    </>
  );
};

export default CartProduct;
