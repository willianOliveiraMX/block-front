import React from "react";
import Header from "./components/Header";
import BasicButton from "./components/BasicButton";
import BasicInput from "./components/BasicInput";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <BasicButton description="Cancelar" callBack={() => {}} secondary />
        <BasicButton description="Salvar" callBack={() => {}} />
      </div>
      <div>Content here </div>
      <div>
        <BasicInput label="E-mail" />
      </div>
    </>
  );
};

export default App;
