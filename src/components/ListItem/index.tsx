import React from "react";
import { Link } from "react-router-dom";
import Edit from "../../icons/edit.svg";
import Delete from "../../icons/delete.svg";
import enterTheDomain from "../../icons/enterTheDomain.svg";
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
  linkTo?: string | null;
}

const ListItem = ({
  description,
  descriptionUrl,
  itemId,
  handleDeleteAction,
  handleEditAction,
  linkTo,
}: ListItemInterface): JSX.Element => {
  return (
    <ListWrapper key={itemId}>
      {linkTo && (
        <Link to={linkTo || ""} style={{ display: "flex" }}>
          <img
            src={enterTheDomain}
            alt="follow link"
            width="18px"
            style={{ marginRight: "12px" }}
          />
          <DecriptionContainer>{description}</DecriptionContainer>
        </Link>
      )}
      {!linkTo && <DecriptionContainer>{description}</DecriptionContainer>}
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

ListItem.defaultProps = { linkTo: null };

export default ListItem;
