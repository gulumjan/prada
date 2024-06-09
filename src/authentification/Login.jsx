import React, { useState } from "react";
import "./Auth.scss";
import img from "../images/chris-lee-70l1tDAI6rM-unsplash 1.png";
import { Button } from "@mui/material";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { loginUser } = useAuth();
  async function signIn() {
    try {
      await loginUser(email, password);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div style={{ marginTop: "45px" }} className="main_content">
      <div className="log_content">
        <h2>Welcome !</h2>

        <div className="log-inp">
          <h3>Email address</h3>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            type="text"
          />
        </div>
        <div className="log-inp">
          <h3>Password</h3>
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            type="text"
          />
        </div>
        <div className="inpRad">
          <input type="radio" />
          <p>I agree to terms & policy</p>
        </div>
        <Button
          onClick={() => signIn()}
          sx={{
            width: 470,
            background: "#3A5B22",
            "&:hover": { background: "#3A5B22" },
          }}
          variant="contained"
        >
          Sign In
        </Button>
      </div>
      <img className="flower" src={img} alt="" />
    </div>
  );
};

export default Login;
