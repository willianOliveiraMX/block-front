import React from "react";
import Draggable from "react-draggable";
import { DragCard } from "./index.style";

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

interface ContainerProps {
  handleOnStopDrag: (p: DragData) => void;
  containerPosition: Position;
}

const DragCardContainer = ({
  handleOnStopDrag,
  containerPosition,
}: ContainerProps): JSX.Element => {
  return (
    <Draggable
      onStop={(_, data) => {
        handleOnStopDrag(data);
      }}
      onDrag={(_, data) => {
        const { node } = data;
        node.style.transition = "none";
      }}
      position={containerPosition}
    >
      <DragCard>
        <h1>aqui arrasta</h1>
      </DragCard>
    </Draggable>
  );
};

export default DragCardContainer;
