import React from "react";
import { CardWrapper, CardContainer, CartDescription } from "./index.style";

interface Card {
  description: string;
}

const CardMessage = ({ description }: Card): JSX.Element => {
  return (
    <CardWrapper>
      <CardContainer>
        <CartDescription>{description}</CartDescription>
      </CardContainer>
    </CardWrapper>
  );
};

export default CardMessage;
