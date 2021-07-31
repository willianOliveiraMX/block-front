import React, { useState } from "react";
import BasicInputWrapper from "./index.style";

interface BasicInputInterface {
  label: string;
}

const BasicInput = ({ label }: BasicInputInterface): JSX.Element => {
  const [inputFocus, setInputFocus] = useState(false);

  const handleOnFocus = () => {
    setInputFocus(true);
  };

  const handleOnBlur = () => {
    setInputFocus(false);
  };

  return (
    <BasicInputWrapper basicInputOnFocus={inputFocus}>
      <input id="inputId" onFocus={handleOnFocus} onBlur={handleOnBlur} />
      <label htmlFor="inputId">{label}</label>
    </BasicInputWrapper>
  );
};

export default BasicInput;
