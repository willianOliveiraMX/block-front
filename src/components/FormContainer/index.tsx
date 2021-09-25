import React from "react";

type Props = {
  children: React.ReactChild | React.ReactChild[];
  loginRules: {
    description: string;
    value: string;
    isOnError: boolean;
    errorMessage: string;
    validateFunction(p: string): boolean;
  }[];
  setLoginRules: any;
};

const defaultValue = {
  inputs: [
    {
      description: "",
      value: "",
      isOnError: false,
      errorMessage: "",
      validateFunction: (p: string) => false,
    },
  ],
  updateInputs: (): any => {},
};

export const FormContainerContext = React.createContext(defaultValue);

export const FormContainer = ({
  children,
  loginRules,
  setLoginRules,
}: Props): JSX.Element => {
  return (
    <FormContainerContext.Provider
      value={{
        inputs: loginRules,
        updateInputs: setLoginRules,
      }}
    >
      <form autoComplete="off">{children}</form>
    </FormContainerContext.Provider>
  );
};

export default FormContainerContext;
