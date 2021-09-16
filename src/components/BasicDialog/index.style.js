import styled, { css, keyframes } from "styled-components";

const backgroundAnimation = keyframes`
    0% {
      background-color: transparent;
      backdrop-filter: blur(0px);
    }
    25% {
      background-color: rgba(53, 6, 37, 0.23);
      backdrop-filter: blur(0px);
    }
    50% {
      background-color: rgba(53, 6, 37, 0.46);
      backdrop-filter: blur(2px);
    }
    75% {
      background-color: rgba(53, 6, 37, 0.46);
      backdrop-filter: blur(6px);
    }
    100% {
      background-color: rgba(53, 6, 37, 0.46);
      backdrop-filter: blur(10px);
    }
`;

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

export const BackgroundWall = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  backdrop-filter: blur(0px);
  display: flex;
  justify-content: center;
  align-items: center;

  animation-duration: 450ms;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-name: ${backgroundAnimation};
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
