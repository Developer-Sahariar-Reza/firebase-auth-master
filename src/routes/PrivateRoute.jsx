import React, { useContext } from "react";
import { UserContext } from "../provider/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  if (user) {
    return children;
  } else {
    return (
      <Navigate to="/login" replace={true}>
        Login
      </Navigate>
    );
  }
};

export default PrivateRoute;
