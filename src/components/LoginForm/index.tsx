import React from "react";
import { FormContainer } from "../FormContainer";
import BasicInput from "../BasicInput";
import BasicButton from "../BasicButton";
import GridWrapper from "../BasicGrid";
import Divider from "../Divider";
import { LoginFormWrapper, LoginFormContainer } from "./index.style";

const LoginForm = (): JSX.Element => {
  return (
    <LoginFormWrapper>
      <LoginFormContainer>
        <FormContainer>
          <BasicInput label="E-mail" type="text" />
          <BasicInput label="Password" type="password" />
          <GridWrapper flex justifyContentEnd>
            <BasicButton callBack={() => {}} description="Login" />
          </GridWrapper>
        </FormContainer>
        <Divider description="or" />
      </LoginFormContainer>
    </LoginFormWrapper>
  );
};

export default LoginForm;
