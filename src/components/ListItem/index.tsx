import React from "react";
import Edit from "../../icons/edit.svg";
import Delete from "../../icons/delete.svg";
import {
  ListWrapper,
  DecriptionContainer,
  IconsContainer,
} from "./index.style";

interface ModalToprops {
  id: number;
  description: string;
}
interface ListItemInterface {
  description: string;
  descriptionUrl: string;
  itemId: number;
  handleDeleteAction: ({ id, description }: ModalToprops) => void;
  handleEditAction: ({ id, description }: ModalToprops) => void;
}

const ListItem = ({
  description,
  descriptionUrl,
  itemId,
  handleDeleteAction,
  handleEditAction,
}: ListItemInterface): JSX.Element => {
  return (
    <ListWrapper key={itemId}>
      <DecriptionContainer>{description}</DecriptionContainer>
      <DecriptionContainer>{descriptionUrl}</DecriptionContainer>
      <IconsContainer>
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
          type="button"
          onClick={() => handleEditAction({ id: itemId, description })}
        >
          <img src={Edit} alt="Editar domínio" width="25px" />
        </button>

        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
          onClick={() => handleDeleteAction({ id: itemId, description })}
          type="button"
        >
          <img src={Delete} alt="Deletar domínio" width="25px" />
        </button>
      </IconsContainer>
    </ListWrapper>
  );
};

export default ListItem;
