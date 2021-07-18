import styled from "styled-components";

export const MenuWrapper = styled.div`
  position: absolute;
  right: 5px;
  background-color: white;
  width: 120px;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.25);
  border-radius: 6px 0px 6px 6px;
`;

export const MenuList = styled.div``;

export const MenuItem = styled.p`
  cursor: pointer;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 34px;
  margin: 0;
  padding-left: 10px;
  color: #e052b0;
  transition: all 150ms ease-in;
  &:hover {
    background-color: #f4e5ef;
  }
`;
