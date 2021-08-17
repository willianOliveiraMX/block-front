import React from "react";
import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";

const Login = (): JSX.Element => {
  return (
    <>
      <Header isLoginPage />
      <LoginForm />
    </>
  );
};

export default Login;
