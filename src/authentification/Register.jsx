import React, { useState } from "react";
import "./Auth.scss";
import { Alert, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import img from "../images/chris-lee-70l1tDAI6rM-unsplash 1.png";
import { useAuth } from "../context/AuthContext";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { register, signInWithGoogle } = useAuth();

  async function signUp() {
    try {
      await register(email, password);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {error && (
        <Alert sx={{ width: 544, marginTop: "100px" }} severity="error">
          {error}
        </Alert>
      )}
      <div className="main_content">
        <div className="log_content">
          <h2>Get Started Now</h2>
          <div className="log-inp">
            <h3>Name</h3>
            <input placeholder="Enter your name" type="text" />
          </div>
          <div className="log-inp">
            <h3> Last Name</h3>
            <input placeholder="Enter your last name" type="text" />
          </div>
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
              placeholder="Enter your name"
              type="text"
            />
          </div>
          <div className="inpRad">
            <input type="radio" />
            <p>I agree to terms & policy</p>
          </div>
          <Button
            onClick={() => signUp()}
            sx={{
              width: 470,
              background: "#3A5B22",
              "&:hover": { background: "#3A5B22" },
            }}
            variant="contained"
          >
            Sign Up
          </Button>
          <p>Or</p>
          <div className="logAuth">
            <Button onClick={() => signInWithGoogle()}>
              {" "}
              <GoogleIcon />
              Sign In With Google
            </Button>
            <Button>
              {" "}
              <AppleIcon />
              Sign In With Apple
            </Button>
          </div>
          <h4>
            Have an account?{" "}
            <a style={{ color: "blue" }} href="/signIn">
              Sign In
            </a>{" "}
          </h4>
        </div>
        <img className="flower" src={img} alt="" />
      </div>
    </div>
  );
};

export default Register;
