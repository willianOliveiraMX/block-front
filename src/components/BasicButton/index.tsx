/* eslint-disable no-param-reassign */
import React, { useState, useRef, useContext } from "react";
import { StyledButton, Wave } from "./index.style";
import { FormContainerContext } from "../FormContainer";

interface BasicButtonInterface {
  description: string;
  handleForm: (event: React.MouseEvent<HTMLElement>) => void;
  secondary?: boolean;
  validInputOff?: boolean;
}

const defaultProps = {
  secondary: false,
  validInputOff: false,
};

const BasicButton = ({
  description,
  handleForm,
  secondary,
  validInputOff,
}: BasicButtonInterface): JSX.Element => {
  const [openWave, setOpenState] = useState(false);
  const [axleY, setAxleY] = useState(0);
  const [axleX, setAxleX] = useState(0);
  const [scale, setScale] = useState(0);

  const buttonRef = useRef<HTMLInputElement>(null);
  const waveRef = useRef<HTMLInputElement>(null);
  const value = useContext(FormContainerContext);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const {
      inputs = [],
      updateInputs = (newInput: unknown) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        newInput;
      },
    } = value;
    const everyInputIsValid = inputs.every(
      (input) => input.isOnError === false && input.value.length
    );
    console.log("inputs ==::>", inputs);
    console.log("validation here ==::>", everyInputIsValid, validInputOff);
    if (everyInputIsValid || validInputOff) {
      handleForm(event);
      updateInputs([...inputs]);
    }

    // const buttonPosition = buttonRef?.current?.getBoundingClientRect();
    // const {
    //   inputs = [],
    //   updateInputs = (newInput: unknown) => {
    //     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    //     newInput;
    //   },
    // } = value;
    // setAxleY(Math.abs((buttonPosition?.top || 0) - event.clientY));
    // setAxleX(Math.abs((buttonPosition?.left || 0) - event.clientX));
    // setOpenState(true);
    // setScale(buttonPosition?.width || 90);
    // const cleanEffect = () => {
    //   waveRef?.current?.removeEventListener("transitionend", cleanEffect);
    //   setOpenState(false);
    //   const cleanEffect2 = () => {
    //     waveRef?.current?.removeEventListener("transitionend", cleanEffect2);
    //     const everyInputIsValid = inputs.every(
    //       (input) => input.isOnError === false && input.value.length
    //     );
    //     if (everyInputIsValid || validInputOff) {
    //       handleForm(event);
    //     } else {
    //       updateInputs([...inputs]);
    //     }
    //     setTimeout(() => {
    //       setScale(0);
    //     }, 450);
    //   };
    //   waveRef?.current?.addEventListener("transitionend", cleanEffect2);
    // };
    // waveRef?.current?.addEventListener("transitionend", cleanEffect);
  };

  return (
    <StyledButton
      type="button"
      onClick={handleClick}
      ref={buttonRef}
      secondary={secondary}
    >
      {description}
      <Wave
        ref={waveRef}
        display={openWave}
        axleX={axleX}
        axleY={axleY}
        scale={scale}
      />
    </StyledButton>
  );
};

BasicButton.defaultProps = defaultProps;

export default BasicButton;
