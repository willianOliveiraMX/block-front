import styled, { css } from "styled-components";

const GridPlatformContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
`;

export const InternalContainer = styled.div`
  position: relative;
  background-color: white;
  width: 80%;
  margin-top: 45px;
  overflow-y: scroll;
  overflow-x: hidden;
  /* display: flex; */
  /* justify-content: center; */
  /* gap: 35px; */
`;

export const GridDragAnDropContainer = styled.div`
  /* width: 100%;
  display: flex; */
`;

export const GridDragAndDropLine = styled.div`
  ${(display) =>
    display &&
    css`
      ${display}
    `};
  justify-content: ${(justifyContent) => justifyContent && justifyContent};
  width: 100%;
  gap: 10px;
`;

export const InternalGridHeader = styled.div`
  width: 80%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  top: 8px;
`;

export const PageName = styled.span`
  color: #350625;
  font-size: 12px;
  font-weight: 700;
`;

export const ResponsiveIcons = styled.div`
  display: flex;
  gap: 17px;
  align-items: baseline;
  button {
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    position: relative;
    width: 20px;
    height: 30px;
  }
`;

export const PageBreadcrumbs = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  color: #350625;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  gap: 6px;
  img {
    width: 14px;
  }
`;

export const DragCard = styled.div`
  width: 80px;
  height: 125px;
  background-color: rebeccapurple;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-content: center;
  color: white;
  cursor: move;
`;

export const GridContainer = styled.div`
  ${(display) =>
    css`
      ${display};
    `}
  ${(width) =>
    css`
      ${width}
    `}
  ${(height) =>
    css`
      ${height}
    `}
  ${(justifyContent) =>
    css`
      ${justifyContent}
    `}
  margin-top: 8px;
  border: 1px solid #ffb4e5;
  transition: all 120ms ease-in;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    border: 3px solid #ffb4e5;
  }
`;

export const GridClickArea = styled.div`
  width: 100%;
  height: 100%;
`;

export default GridPlatformContainer;
