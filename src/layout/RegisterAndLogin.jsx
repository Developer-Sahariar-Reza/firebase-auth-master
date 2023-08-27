import React from "react";
import Register from "../components/Register";
import Login from "../components/Login";

const RegisterAndLogin = () => {
  return (
    <div className="register-login-container">
      <div>
        <Register />
      </div>
      <div>
        <Login></Login>
      </div>
    </div>
  );
};

export default RegisterAndLogin;
