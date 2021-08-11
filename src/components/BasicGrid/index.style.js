import styled, { css } from "styled-components";

const Grid = styled.div`
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
    `};
  ${({ justifyContentEnd }) =>
    justifyContentEnd &&
    css`
      justify-content: flex-end;
    `};
`;

export default Grid;
