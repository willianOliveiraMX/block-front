import React from "react";

type Props = {
  children: React.ReactChild | React.ReactChild[];
};

const FormContainerContext = React.createContext("batata");

export const FormContainer = ({ children }: Props): JSX.Element => {
  return (
    <FormContainerContext.Provider value="chips">
      <form autoComplete="off">{children}</form>
    </FormContainerContext.Provider>
  );
};

export default FormContainerContext;
