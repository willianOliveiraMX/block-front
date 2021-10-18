import styled from "styled-components";

const BackgroundPlatform = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% - 72px);
  background-color: #fddaf1;
`;

export const SideBarMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  width: 51px;
  height: 100%;
  background-color: #e052b0;
  position: relative;
  left: 0;
  transition: all 400ms ease-in;
`;

export const ArrowIcon = styled.img`
  transition: all 100ms ease-in;
  position: absolute;
  left: ${({ openSideMenu }) => (openSideMenu ? "100%" : "50px")};
  cursor: pointer;
`;

export const ArrowContainer = styled.div`
  position: relative;
  height: calc(100% - 72px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const ButtonMenu = styled.button`
  padding: 8px;
  margin-top: 8px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 50px;
  height: 50px;
`;

export const WrapperMenuItens = styled.div`
  position: absolute;
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content; */
  display: flex;
  flex-flow: wrap;
  align-items: flex-start;
  align-content: baseline;
  width: 247px;
  height: 100%;
  background-color: #6d2454;
  left: 51px;
  z-index: 1;
  transition: all 120ms ease-in;
  transform: ${({ openSideMenu }) =>
    openSideMenu ? "translate(0%, 0px)" : "translate(-120%, 0px)"};
  img {
    width: 115px;
    max-height: 80px;
    margin: 4px;
    cursor: pointer;
  }
`;

export const WrapperMenuPages = styled.div`
  position: absolute;
  width: 247px;
  height: 100%;
  background-color: #6d2454;
  left: 51px;
  z-index: 1;
  transition: all 120ms ease-in;
  transform: ${({ openSideMenu }) =>
    openSideMenu ? "translate(0%, 0px)" : "translate(-120%, 0px)"};
`;

export default BackgroundPlatform;
