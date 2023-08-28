import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config";

// firebase auth
const auth = getAuth(app);

// Context create
export const UserContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
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
