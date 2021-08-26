import React, { useState, useContext, useEffect } from "react";
import BasicInputWrapper, { ErrorMessageWrapper } from "./index.style";
import { FormContainerContext } from "../FormContainer";
import emailValidation, {
  passwordValidation,
  validURL,
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

  const validateFields = () => {
    const { inputs = [] } = value;

    if (description === "email") {
      const isValid = emailValidation(inputInternalValue);
      inputs.map((input) => {
        if (input.description === description) {
          // eslint-disable-next-line no-param-reassign
          input.isOnError = !isValid;
          // eslint-disable-next-line no-param-reassign
          input.value = inputInternalValue;
          setErrorMessage(isValid ? "" : input.errorMessage);
        }
        return input;
      });
    }

    if (description === "password") {
      const isValid = passwordValidation(inputInternalValue);
      inputs.map((input) => {
        if (input.description === description) {
          // eslint-disable-next-line no-param-reassign
          input.isOnError = !isValid;
          // eslint-disable-next-line no-param-reassign
          input.value = inputInternalValue;
          setErrorMessage(isValid ? "" : input.errorMessage);
        }
        return input;
      });
    }

    if (description === "text") {
      const isValid = inputInternalValue.length < 40;
      inputs.map((input) => {
        if (input.description === description) {
          // eslint-disable-next-line no-param-reassign
          input.isOnError = !isValid;
          // eslint-disable-next-line no-param-reassign
          input.value = inputInternalValue;
          setErrorMessage(isValid ? "" : input.errorMessage);
        }
        return input;
      });
    }

    if (description === "urlSite") {
      const isValid = validURL(inputInternalValue);
      inputs.map((input) => {
        if (input.description === description) {
          // eslint-disable-next-line no-param-reassign
          input.isOnError = !isValid;
          // eslint-disable-next-line no-param-reassign
          input.value = inputInternalValue;
          setErrorMessage(isValid ? "" : input.errorMessage);
        }
        return input;
      });
    }
  };

  useEffect(() => {
    if (!inputInternalValue.length) return;
    validateFields();
  });

  const handleOnFocus = () => {
    setInputFocus(true);
  };

  const handleOnBlur = () => {
    if (!inputInternalValue.length) {
      setInputFocus(false);
    }

    const { inputs = [] } = value;
    if (!inputs.length) return;

    const currentInput = inputs.find(
      (input) => input.description === description
    );

    if (!currentInput) {
      throw new Error(
        `You must have to create a object for ${description} input`
      );
    }

    validateFields();
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
