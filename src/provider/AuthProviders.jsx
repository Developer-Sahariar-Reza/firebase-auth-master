import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

// firebase auth
const auth = getAuth(app);

// Context create
export const UserContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);

  // create account with email & password
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // log in with email & password
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userInfo = {
    user,
    signUp,
    logIn,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default AuthProviders;
