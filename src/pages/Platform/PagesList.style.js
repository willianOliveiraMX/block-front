import styled, { css } from "styled-components";

const PageItem = styled.div`
  padding: 2px 4px;
  color: #ffb4e5;
  border-bottom: 2px solid #ffb4e5;
  font-size: 14px;
  font-weight: 700;
  margin: 8px 12px;
  cursor: pointer;
  transition: all 150ms ease-in;
  ${({ isSelected }) =>
    isSelected &&
    css`
      color: #350625;
      background-color: #ffb4e5;
    `}
`;

export const InputField = styled.input`
  margin: 8px 12px;
  padding: 2px 4px;
  background-color: transparent;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  border-bottom: 2px solid #ffb4e5;
  color: #ffb4e5;
  width: 216px;
  font-size: 14px;
  font-weight: 700;
  outline: none;
`;

export const AddPageIcon = styled.img`
  width: 14px;
  margin-right: 12px;
  margin-top: 8px;
`;

export default PageItem;
