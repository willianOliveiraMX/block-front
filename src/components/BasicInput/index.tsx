import React, { useState } from "react";
import BasicInputWrapper from "./index.style";

interface BasicInputInterface {
  label: string;
  type: string;
}

const BasicInput = ({ label, type }: BasicInputInterface): JSX.Element => {
  const [inputFocus, setInputFocus] = useState(false);
  const [inputInternalValue, setInputInternalValue] = useState("");

  const handleOnFocus = () => {
    setInputFocus(true);
  };

  const handleOnBlur = () => {
    if (inputInternalValue.length) return;
    setInputFocus(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setInputInternalValue(newValue);
  };

  return (
    <BasicInputWrapper basicInputOnFocus={inputFocus}>
      <input
        id="inputId"
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        value={inputInternalValue}
        onChange={handleInputChange}
        type={type}
      />
      <label htmlFor="inputId">{label}</label>
    </BasicInputWrapper>
  );
};

export default BasicInput;
