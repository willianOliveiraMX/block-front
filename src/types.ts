import { RefObject } from "react";

interface CardContainer {
  title: string;
  analiticsSource: string;
}

export interface CardStyleProps {
  display: string;
  justifyContent: string;
  width: string;
  height: string;
}

interface CardGridContainer {
  id: number;
  isSelected: boolean;
  horizontalGap: number;
  width: number;
  height: number;
  gridCardRef: RefObject<HTMLDivElement>[];
  components: Array<CardContainer>[];
  containerLineType: number;
  containerLineStyle: {
    display: string;
    justifyContent: string;
  };
  cardStyle: CardStyleProps;
}

export default CardGridContainer;
