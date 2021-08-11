import React, { useState, useRef } from "react";
import { StyledButton, Wave } from "./index.style";

interface BasicButtonInterface {
  description: string;
  callBack: (event: React.MouseEvent<HTMLElement>) => void;
  secondary?: boolean;
}

const defaultProps = {
  secondary: false,
};

const BasicButton = ({
  description,
  callBack,
  secondary,
}: BasicButtonInterface): JSX.Element => {
  const [openWave, setOpenState] = useState(false);
  const [axleY, setAxleY] = useState(0);
  const [axleX, setAxleX] = useState(0);
  const [scale, setScale] = useState(0);

  const buttonRef = useRef<HTMLInputElement>(null);
  const waveRef = useRef<HTMLInputElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const buttonPosition = buttonRef?.current?.getBoundingClientRect();

    setAxleY(Math.abs((buttonPosition?.top || 0) - event.clientY));
    setAxleX(Math.abs((buttonPosition?.left || 0) - event.clientX));
    setOpenState(true);

    setScale(buttonPosition?.width || 90);

    const cleanEffect = () => {
      waveRef?.current?.removeEventListener("transitionend", cleanEffect);
      setOpenState(false);
      const cleanEffect2 = () => {
        waveRef?.current?.removeEventListener("transitionend", cleanEffect2);
        callBack(event);
        setTimeout(() => {
          setScale(0);
        }, 450);
      };
      waveRef?.current?.addEventListener("transitionend", cleanEffect2);
    };

    waveRef?.current?.addEventListener("transitionend", cleanEffect);
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
