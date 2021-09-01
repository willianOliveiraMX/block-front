import styled from "styled-components";

export const ListWrapper = styled.div`
  max-height: 92px;
  background-color: white;
  box-shadow: 0px 4px 13px -2px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin: 24px 0 24px 0;
  padding: 18px;
  display: grid;
  grid-template-columns: 2fr 1fr 4fr;
  align-items: center;
  cursor: pointer;
  transition: all 225ms ease-out;
  &:hover {
    background-color: #f7e6e8;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const DecriptionContainer = styled.div``;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  img {
    margin-left: 24px;
  }
`;
