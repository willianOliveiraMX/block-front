import React, { useState, useContext } from "react";
import BasicInputWrapper, { ErrorMessageWrapper } from "./index.style";
import { FormContainerContext } from "../FormContainer";
import emailValidation, {
  passwordValidation,
} from "../../services/formValidation";

interface BasicInputInterface {
  label: string;
  type: string;
  description: string;
}

const BasicInput = ({
  label,
  type,
  description,
}: BasicInputInterface): JSX.Element => {
  const [inputFocus, setInputFocus] = useState(false);
  const [inputInternalValue, setInputInternalValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const value = useContext(FormContainerContext);

  const handleOnFocus = () => {
    setInputFocus(true);
  };

  const handleOnBlur = () => {
    if (!inputInternalValue.length) {
      setInputFocus(false);
    }

    const { inputs = [], updateInputs = (newInput: any) => {} } = value;
    if (!inputs.length) return;

    const currentInput = inputs.find(
      (input) => input.description === description
    );

    if (!currentInput) {
      throw new Error(
        `You must have to create a object for ${description} input`
      );
    }

    if (description === "email") {
      const isValid = emailValidation(inputInternalValue);
      const newCurrentInputs = inputs.map((input) => {
        if (input.description === description) {
          // eslint-disable-next-line no-param-reassign
          input.isOnError = isValid;
          setErrorMessage(isValid ? "" : input.errorMessage);
        }
        return input;
      });
      updateInputs(newCurrentInputs);
    }

    if (description === "password") {
      const isValid = passwordValidation(inputInternalValue);
      const newCurrentInputs = inputs.map((input) => {
        if (input.description === description) {
          // eslint-disable-next-line no-param-reassign
          input.isOnError = isValid;
          setErrorMessage(isValid ? "" : input.errorMessage);
        }
        return input;
      });
      updateInputs(newCurrentInputs);
    }
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
      <ErrorMessageWrapper>{errorMessage}</ErrorMessageWrapper>
    </BasicInputWrapper>
  );
};

export default BasicInput;
