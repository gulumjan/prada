import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { Alert } from "@mui/material";
const authContext = createContext();
export const useAuth = () => useContext(authContext);

const INIT_STATE = {
  user: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const googleProvider = new GoogleAuthProvider();
  async function register(name, lastName, email, password) {
    await createUserWithEmailAndPassword(auth, email, password).then(
      (response) => {
        let newUser = response.user;
        updateProfile(newUser, {
          displayName: `${name} ${lastName}`,
        });
      }
    );
  }

  async function loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  }

  function getUser() {
    return onAuthStateChanged(auth, (user) => {
      dispatch({
        type: "GET_USER",
        payload: user,
      });
    });
  }

  async function logOutProfile() {
    return signOut(auth)
      .then(() => {
        <Alert>Sign Out Successful</Alert>;
      })
      .catch((error) => {
        <Alert severity="error">An error happened</Alert>;
      });
  }
  useEffect(() => {
    getUser();
  }, []);

  const values = {
    register,
    signInWithGoogle,
    user: state.user,
    logOutProfile,
    loginUser,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
