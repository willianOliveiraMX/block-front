import styled, { css } from "styled-components";

const BasicInputWrapper = styled.div`
  position: relative;
  padding-top: 15px;
  padding-bottom: 10px;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: rgba(224, 82, 176, 0.5);
  border-bottom: 1px solid #e052b0;

  @keyframes aureaLine {
    0% {
      -webkit-box-shadow: 0px -9px 29px 3px #e052b0;
      box-shadow: 0px -9px 29px 3px #e052b0;
      height: 1px;
    }
    50% {
      -webkit-box-shadow: 0px -9px 29px 2px #e052b0;
      box-shadow: 0px -9px 29px 2px #e052b0;
      height: 15px;
    }
    100% {
      -webkit-box-shadow: 0px -9px 29px 0px #e052b0;
      box-shadow: 0px -9px 29px 0px #e052b0;
      height: 1px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    background-color: #e052b0;
    -webkit-box-shadow: 0px -9px 29px 1px #e052b0;
    box-shadow: 0px -9px 29px 1px #e052b0;
    bottom: -1px;
    transition: all 400ms ease-in-out;
    animation-fill-mode: forwards;

    ${({ basicInputOnFocus }) =>
      basicInputOnFocus &&
      css`
        width: 100%;
        animation-name: aureaLine;
      `};
  }
  input {
    position: relative;
    border: none;
    outline: none;
    padding-top: 10px;
    border-radius: 0;
    background-color: transparent;
    width: 100%;
    color: #921667;
  }
  label {
    position: absolute;
    left: 0;
    top: 21px;
    transition: all 200ms linear;

    ${({ basicInputOnFocus }) =>
      basicInputOnFocus &&
      css`
        top: 5px;
        font-size: 10px;
        color: #e052b0;
      `};
  }
`;

export default BasicInputWrapper;
