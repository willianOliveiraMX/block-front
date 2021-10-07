import styled, { keyframes } from "styled-components";

const blurAnimation = keyframes`
  from {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0);
    opacity: 0;
    top: 30px;
  }
  to {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    opacity: 1;
    top: 0px;
  }
`;

export const DialogContent = styled.div`
  background-color: white;
  position: relative;

  animation-duration: 200ms;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  /* animation-delay: 50ms; */
  opacity: 0;

  animation-name: ${blurAnimation};
`;

export const DialogHeader = styled.div`
  position: relative;
  img {
    position: absolute;
    width: 22px;
    position: absolute;
    right: 2px;
    top: 2px;
  }
`;

export const DialogTitle = styled.h1`
  color: #350625;
  font-size: 18px;
  padding: 12px 24px 12px 24px;
`;
