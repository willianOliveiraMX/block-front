import React from "react";
import GeneralButton, { GeneralGridManagerContainer } from "./index.style";
import horizontalTwo from "./icons/horizontalTwo.svg";
import horizontalTwoSpace from "./icons/horizontalTwoSpace.svg";
import treeVertical_1 from "./icons/treeVertical-1.svg";
import treeVertical_2 from "./icons/treeVertical-2.svg";
import treeVertical_3 from "./icons/treeVertical-3.svg";
import viewList from "./icons/viewList.svg";
import viewModule from "./icons/viewModule.svg";
import viewGrid from "./icons/viewGrid.svg";
import viewList_2 from "./icons/viewList-2.svg";
import verticalSplit from "./icons/verticalSplit.svg";

interface GridProps {
  handleDefaultGridLine: (p: number) => void;
}

const GridManager = ({ handleDefaultGridLine }: GridProps): JSX.Element => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <GeneralGridManagerContainer>
        <GeneralButton type="button" onClick={() => handleDefaultGridLine(1)}>
          <img src={horizontalTwo} alt="horizontalTwoIcon" />
        </GeneralButton>
        <GeneralButton type="button" onClick={() => handleDefaultGridLine(2)}>
          <img src={horizontalTwoSpace} alt="horizontalTwoIcon" />
        </GeneralButton>
        <GeneralButton type="button" onClick={() => handleDefaultGridLine(3)}>
          <img src={treeVertical_1} alt="horizontalTwoIcon" />
        </GeneralButton>
        <GeneralButton type="button" onClick={() => handleDefaultGridLine(4)}>
          <img src={treeVertical_2} alt="horizontalTwoIcon" />
        </GeneralButton>
        <GeneralButton type="button" onClick={() => handleDefaultGridLine(5)}>
          <img src={treeVertical_3} alt="horizontalTwoIcon" />
        </GeneralButton>
        <GeneralButton type="button" onClick={() => handleDefaultGridLine(6)}>
          <img src={viewList} alt="horizontalTwoIcon" />
        </GeneralButton>
        <GeneralButton type="button" onClick={() => handleDefaultGridLine(7)}>
          <img src={viewModule} alt="horizontalTwoIcon" />
        </GeneralButton>
        <GeneralButton type="button" onClick={() => handleDefaultGridLine(8)}>
          <img src={viewGrid} alt="horizontalTwoIcon" />
        </GeneralButton>
        <GeneralButton type="button" onClick={() => handleDefaultGridLine(9)}>
          <img src={viewList_2} alt="horizontalTwoIcon" />
        </GeneralButton>
        <GeneralButton type="button">
          <img src={verticalSplit} alt="horizontalTwoIcon" />
        </GeneralButton>
      </GeneralGridManagerContainer>
    </div>
  );
};

export default GridManager;
