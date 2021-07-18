import styled from "styled-components";

export const StyledButton = styled.button`
  width: 108px;
  padding: 8px 24px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  background-color: ${({ secondary }) => (secondary ? "white" : "#e052b0")};
  border: 1px solid #e052b0;
  color: ${({ secondary }) => (secondary ? "#e052b0" : "white")};
  transition: all ease 250ms;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:hover {
    transform: translateY(-2px);
  }
`;

export const Wave = styled.span`
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  position: absolute;
  will-change: transform;
  transform: ${({ axleX, axleY }) =>
    `translateX(${axleX}px) translateY(${axleY}px)`};
  &::after {
    content: "";
    transition: all ease 500ms;
    display: block;
    width: 100%;
    border-radius: 50%;
    width: 2px;
    height: 2px;
    background-color: #ffb6e6;
    opacity: ${({ display }) => (display ? "0.8" : "0")};
    will-change: transform;
    transform: ${({ scale }) => `scale(${scale})`};
  }
`;

export default StyledButton;
