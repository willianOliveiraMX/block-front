import React, { useState } from "react";
import { FormContainer } from "../FormContainer";
import BasicInput from "../BasicInput";
import BasicButton from "../BasicButton";
import GridWrapper from "../BasicGrid";
import Divider from "../Divider";
import { LoginFormWrapper, LoginFormContainer } from "./index.style";

const LoginForm = (): JSX.Element => {
  const [loginFormRules, setLoginFormRules] = useState([
    {
      description: "email",
      value: "",
      isOnError: false,
      errorMessage: "Por favor, insira um email válido!",
    },
    {
      description: "password",
      value: "",
      isOnError: false,
      errorMessage:
        "A senha precisa ter no mínimo 8 caracteres. Uma letra maíscula e um número",
    },
  ]);

  const handleLogin = (): any => {
    console.log(loginFormRules);
  };

  return (
    <LoginFormWrapper>
      <LoginFormContainer>
        <FormContainer
          loginRules={loginFormRules}
          setLoginRules={setLoginFormRules}
        >
          <BasicInput label="E-mail" type="text" description="email" />
          <BasicInput label="Password" type="password" description="password" />
          <GridWrapper flex justifyContentEnd>
            <BasicButton handleForm={handleLogin} description="Login" />
          </GridWrapper>
        </FormContainer>
        <Divider description="or" />
      </LoginFormContainer>
    </LoginFormWrapper>
  );
};

export default LoginForm;
