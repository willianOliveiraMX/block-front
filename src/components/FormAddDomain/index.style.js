import styled, { css } from "styled-components";

const FormDomainContainer = styled.div`
  width: 470px;
  background: #ffffff;
  ${({ boxShadow }) =>
    !boxShadow &&
    css`
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    `};
  padding: 26px;
`;

export default FormDomainContainer;
