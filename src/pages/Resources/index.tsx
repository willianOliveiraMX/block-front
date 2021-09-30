import React, { useState } from "react";
import { useQuery } from "react-query";
import ListContainer from "../Domains/index.style";
import ListItem from "../../components/ListItem";
import GridWrapper from "../../components/BasicGrid";
import PlusIcon from "../../icons/plusicon.svg";
import { getResources } from "../../services/queries";
import { BasicDialog } from "../../components/BasicDialog";
import AddResourceDialog from "./AddResourceDialog";

const Resources = (): JSX.Element => {
  const { data } = useQuery("resourceList", getResources);
  const [toggleResourceDialog, setToggleResourceDialog] = useState(false);

  const handleToggleDialog = () => {
    setToggleResourceDialog(!toggleResourceDialog);
  };

  console.log(data);
  return (
    <div>
      <ListContainer>
        {data &&
          data.map((item: any) => (
            <ListItem
              description={item?.title}
              descriptionUrl={item?.created_at}
              itemId={item.id}
              handleDeleteAction={() => {}}
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
        bodyContent={<AddResourceDialog />}
        dialogTitle="Adicione um novo recurso"
      />
    </div>
  );
};

export default Resources;
