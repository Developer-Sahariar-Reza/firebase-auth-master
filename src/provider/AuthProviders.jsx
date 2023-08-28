import React, { createContext, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

// firebase auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

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

  // register/log in with google
  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // register/log in with github
  const logInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const userInfo = {
    user,
    signUp,
    logIn,
    logInWithGoogle,
    logInWithGithub,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default AuthProviders;
