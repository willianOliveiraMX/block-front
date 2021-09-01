import React from "react";
import Edit from "../../icons/edit.svg";
import Delete from "../../icons/delete.svg";
import {
  ListWrapper,
  DecriptionContainer,
  IconsContainer,
} from "./index.style";

interface ListItemInterface {
  description: string;
  descriptionUrl: string;
  itemId: number;
}

const ListItem = ({
  description,
  descriptionUrl,
  itemId,
}: ListItemInterface): JSX.Element => {
  return (
    <ListWrapper key={itemId}>
      <DecriptionContainer>{description}</DecriptionContainer>
      <DecriptionContainer>{descriptionUrl}</DecriptionContainer>
      <IconsContainer>
        <img src={Edit} alt="Editar domínio" width="25px" />
        <img src={Delete} alt="Deletar domínio" width="25px" />
      </IconsContainer>
    </ListWrapper>
  );
};

export default ListItem;
