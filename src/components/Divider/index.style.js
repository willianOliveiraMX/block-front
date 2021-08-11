import styled from "styled-components";

const DividerContainer = styled.div`
  color: #e052b0;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 32px;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
  text-align: center;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    top: 16px;
    width: 40%;
    left: 0;
    height: 1px;
    background-color: #e052b0;
  }
  &:after {
    position: absolute;
    content: "";
    top: 16px;
    width: 40%;
    right: 0;
    height: 1px;
    background-color: #e052b0;
  }
`;

export default DividerContainer;
