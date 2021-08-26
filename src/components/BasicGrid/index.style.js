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
  ${({ justifyContentCenter }) =>
    justifyContentCenter &&
    css`
      justify-content: center;
    `};
  ${({ marginTop }) =>
    marginTop?.length &&
    css`
      margin-top: ${marginTop};
    `};
`;

export default Grid;
