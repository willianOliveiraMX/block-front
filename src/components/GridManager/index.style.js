import styled from "styled-components";

const GeneralButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 45px;
  height: 45px;
  img {
    width: 45px;
    height: 45px;
  }
`;

export const GeneralGridManagerContainer = styled.div`
  display: flex;
  width: 320px;
  gap: 20px;
  height: 130px;
  margin-top: 10vh;
  flex-flow: wrap;
`;

export default GeneralButton;
