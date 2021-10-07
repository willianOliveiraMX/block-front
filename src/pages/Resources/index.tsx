import React, { useState } from "react";
import { useQuery } from "react-query";
import ListContainer from "../Domains/index.style";
import ListItem from "../../components/ListItem";
import GridWrapper from "../../components/BasicGrid";
import PlusIcon from "../../icons/plusicon.svg";
import { getResources } from "../../services/queries";
import { BasicDialog } from "../../components/BasicDialog";
import AddResourceDialog from "./AddResourceDialog";
import DeleteResourceDialog from "./DeleteResourceDialog";

interface ModalToprops {
  id: number;
  description: string;
}

const Resources = (): JSX.Element => {
  const { data } = useQuery("resourceList", getResources);
  const [toggleResourceDialog, setToggleResourceDialog] = useState(false);
  const [toggleDeleteDialog, setToggleDeleteDialog] = useState(false);
  const [resourceId, setResourceId] = useState(0);

  const handleToggleDialog = () => {
    if (toggleResourceDialog) {
      setResourceId(0);
    }
    setToggleResourceDialog(!toggleResourceDialog);
  };

  const handleToggleDeleteDialog = ({ id, description }: ModalToprops) => {
    if (toggleResourceDialog) {
      setResourceId(0);
    }
    setResourceId(id);
    setToggleDeleteDialog(!toggleDeleteDialog);
  };

  const handleEditAction = ({ id, description }: ModalToprops) => {
    setResourceId(id);
    handleToggleDialog();
  };

  return (
    <div>
      <ListContainer>
        {data &&
          data.map((item: any) => (
            <ListItem
              description={item?.title}
              descriptionUrl={item?.created_at}
              itemId={item.id}
              handleDeleteAction={() => {
                handleToggleDeleteDialog({
                  id: item.id,
                  description: item?.title,
                });
              }}
              handleEditAction={handleEditAction}
            />
          ))}
        <GridWrapper flex justifyContentEnd marginTop="60px">
          <button
            onClick={handleToggleDialog}
            type="button"
            style={{
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <img
              src={PlusIcon}
              alt="add resource"
              style={{ cursor: "pointer", width: "30px" }}
            />
          </button>
        </GridWrapper>
      </ListContainer>
      <BasicDialog
        dialogIsOpen={toggleResourceDialog}
        onClose={handleToggleDialog}
        bodyContent={<AddResourceDialog resourceID={resourceId} />}
        dialogTitle="Adicione um novo recurso"
      />
      <BasicDialog
        dialogIsOpen={toggleDeleteDialog}
        onClose={() => setToggleDeleteDialog(!toggleDeleteDialog)}
        bodyContent={
          <DeleteResourceDialog
            resourceId={resourceId}
            handleClose={() => {
              setToggleDeleteDialog(!toggleDeleteDialog);
            }}
          />
        }
        dialogTitle="Deletar recurso"
      />
    </div>
  );
};

export default Resources;
