import styled from "styled-components";

export const LogoImage = styled.img`
  width: 110px;
`;

export const HeaderStyled = styled.header`
  padding: 20px 20px 5px;
  border-bottom: 1px solid #e052b0;
  display: flex;
  justify-content: space-between;
`;

export const LoginIconStyled = styled.img`
  width: 42px;
  cursor: pointer;
  margin-left: 24px;
  position: relative;
  top: -12%;
`;

export const MenuWrapper = styled.div`
  display: flex;
`;

export const MenuItem = styled.div`
  font-size: 12px;
  padding: 12px 24px;
  transition: all 250ms ease-in;
  color: ${({ backGroundColor }) => (backGroundColor ? "white" : "#e052b0")};
  position: relative;
  height: 100%;
  top: -45%;
  display: flex;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #e052b0;
    left: 0;
    top: 0;
    transition: all 250ms ease;
    z-index: -10;
    transform: ${({ backGroundColor }) =>
      backGroundColor ? "translateY(0%)" : "translateY(103%)"};
  }
`;

export const LoginMenuWrapper = styled.div`
  position: relative;
`;
