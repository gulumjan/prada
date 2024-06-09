import { Button, FormControl, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";

const init = {
  name: "",
  image: "",
  price: "",
  type: "",
  gender: "",
};
const Form = ({ isEdit }) => {
  const { addProduct, oneProduct, editProduct } = useProduct();
  const [inputValues, setInputValues] = useState(init);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (oneProduct && isEdit) {
      setInputValues(oneProduct);
    }
  }, [oneProduct]);
  function handleInp(e) {
    if (e.target.name === "price") {
      let obj = { ...inputValues, [e.target.name]: +e.target.value };
      setInputValues(obj);
    } else {
      let obj = { ...inputValues, [e.target.name]: e.target.value };
      setInputValues(obj);
    }
  }

  function postReq() {
    addProduct(inputValues);
    setInputValues(init);
  }

  function updateReg() {
    editProduct(id, inputValues);
  }
  console.log(inputValues, "bajbsq");
  return (
    <div id="admin">
      <FormControl>
        <div className="admin">
          <img
            style={{
              width: "1400px",
              height: "700px",
              marginLeft: "-128px",
              position: "absolute",
            }}
            src="https://static.printler.com/cache/5/0/1/1/1/7/501117d926c0419481b138fe72930de60efe98ce.jpg"
            alt=""
          />
          <div style={{ marginTop: "163px" }} className="admin_content">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "700px",
                height: "400px",
                gap: "35px",
                marginLeft: "200px",
              }}
              className="adminContent"
            >
              <TextField
                value={inputValues.name}
                onChange={handleInp}
                name="name"
                sx={{ width: 588 }}
                fullWidth
                label="Name"
                id="fullWidth"
              />
              <TextField
                value={inputValues.image}
                onChange={handleInp}
                name="image"
                sx={{ width: 588 }}
                fullWidth
                label="Photo URL"
                id="fullWidth"
              />
              <TextField
                value={inputValues.price}
                onChange={handleInp}
                name="price"
                sx={{ width: 588 }}
                fullWidth
                label="Price"
                id="fullWidth"
              />
              <TextField
                value={inputValues.type}
                onChange={handleInp}
                name="type"
                sx={{ width: 588 }}
                fullWidth
                label="type"
                id="fullWidth"
              />
              <TextField
                value={inputValues.gender}
                onChange={handleInp}
                name="gender"
                sx={{ width: 588 }}
                fullWidth
                label="gender"
                id="fullWidth"
              />

              {isEdit ? (
                <Button
                  sx={{
                    background: "#181818",
                    color: "#fff",
                    width: 588,
                    "&:hover": {
                      background: "#fff",
                      color: "#181818",
                    },
                  }}
                  onClick={() => {
                    updateReg();
                    navigate("/list");
                  }}
                  onCl
                >
                  SAVE
                </Button>
              ) : (
                <Button
                  onClick={() => postReq()}
                  sx={{
                    background: "#181818",
                    color: "#fff",
                    width: 588,
                    "&:hover": {
                      background: "#fff",
                      color: "#181818",
                    },
                  }}
                >
                  CREATE
                </Button>
              )}
            </div>
          </div>
        </div>
      </FormControl>
    </div>
  );
};

export default Form;
