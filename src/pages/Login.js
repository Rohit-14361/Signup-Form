import React from "react";
import Template from "../components/Template";
import loginImg from "../assets/login.png";

function Login({ setIsLoggedIn }) {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tommorow, and beyond."
      desc2="Education to future-proof your carrer."
      image={loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Login;
