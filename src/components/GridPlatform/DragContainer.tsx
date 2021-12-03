import React, { useRef, useState, useEffect, RefObject } from "react";
import DragCardContainer from "./DragCard";
import { GridContainer, GridClickArea } from "./index.style";
import getIfAnyElementIsOnArea from "./CheckAreaElement";
import CardGridContainer, { CardStyleProps } from "../../types";

interface DragData {
  deltaX: number;
  deltaY: number;
  lastX: number;
  lastY: number;
  x: number;
  y: number;
  node: HTMLElement;
}

interface Position {
  x: number;
  y: number;
}

interface DragProps {
  hasContent: boolean;
  listRef: RefObject<HTMLDivElement>[];
  setRefsList: (p: any) => void;
  id: number;
  contentList: boolean[];
  setHasContentList: (p: any) => void;
  containerLineType: number;
  dragContainerStyle: CardStyleProps;
  cardGridContainer: CardGridContainer[][];
  setCardGridContainer: (p: any) => void;
  cardItem: CardGridContainer;
}

const DragContainer = ({
  hasContent,
  listRef,
  setRefsList,
  contentList,
  setHasContentList,
  id,
  containerLineType,
  dragContainerStyle,
  cardGridContainer,
  setCardGridContainer,
  cardItem,
}: DragProps): JSX.Element => {
  const [containerPosition, setContainerPostition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const handleOnStopDrag = (data: DragData) => {
    if (!listRef[id].current) return;

    const { node } = data;
    const childRect = node.getBoundingClientRect();

    if (listRef[id].current) {
      const parentRect = listRef[id].current?.getBoundingClientRect();

      node.style.transition = "all 150ms ease";
      const isOnInternalBound = getIfAnyElementIsOnArea({
        parentRect,
        childRect,
      });
      if (isOnInternalBound) {
        const boundsList = listRef.map((item, index) => {
          const parentRectItem = item.current?.getBoundingClientRect();
          const isOnExternalBound = getIfAnyElementIsOnArea({
            parentRect: parentRectItem,
            childRect,
          });
          return { item, isOnBound: isOnExternalBound, id: index };
        });
        const isOneOnBound = boundsList.find((element) => !element.isOnBound);
        if (isOneOnBound) {
          const newContentList = contentList.map((item, index) => {
            if (isOneOnBound.id === index) {
              return true;
            }
            return false;
          });
          setHasContentList([...newContentList]);
        } else {
          setContainerPostition({ x: 0, y: 0 });
        }
      } else {
        setContainerPostition({ x: 0, y: 0 });
      }
    }
  };

  const handleContainerchanges = () => {
    // console.log(cardGridContainer, cardItem);
    const newCardGridContainer = cardGridContainer.map((line) => {
      return line.map((item) => {
        if (item.id === cardItem.id) {
          return {
            ...item,
            isSelected: true,
          };
        }
        return {
          ...item,
          isSelected: false,
        };
      });
    });
    // console.log(newCardGridContainer);
    setCardGridContainer([...newCardGridContainer]);
  };

  return (
    <GridContainer
      ref={listRef[id]}
      display={dragContainerStyle.display}
      width={dragContainerStyle.width}
      height={dragContainerStyle.height}
      justifyContent={dragContainerStyle.justifyContent}
      isSelectedContainer={cardItem.isSelected}
      style={{ ...(cardItem.isSelected && { border: "3px solid #ffb4e5" }) }}
    >
      <GridClickArea onClick={() => handleContainerchanges()}>
        {/* {hasContent && (
          <DragCardContainer
            handleOnStopDrag={handleOnStopDrag}
            containerPosition={containerPosition}
          />
        )} */}
      </GridClickArea>
    </GridContainer>
  );
};

export default DragContainer;
