import React, { useState } from "react";
import { useQuery } from "react-query";
import CardMessage from "../../components/CardMessage";
import FormAddDomain from "../../components/FormAddDomain";
import GridWrapper from "../../components/BasicGrid";
import getDomains from "../../services/queries";
import ListItem from "../../components/ListItem";
import ListContainer from "./index.style";
import PlusIcon from "../../icons/plusicon.svg";
import { BasicDialog } from "../../components/BasicDialog";
import DialogDeleteDomain from "../../components/DialogDeleteDomain";

interface ModalToprops {
  id?: number;
  description?: string;
}

const Domains = (): JSX.Element => {
  const [toggleAddDomainDialog, setToggleAddDomainDialog] = useState(false);
  const [toggleDeleteDomainDialog, setToggleDeleteDomainDialog] =
    useState(false);
  const [listTodialogProps, setListTodialogProps] = useState({
    id: 0,
    description: "",
  });

  const { data } = useQuery("domainList", getDomains);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const handleToggleDialog = () => {
    setToggleAddDomainDialog(!toggleAddDomainDialog);
  };

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const handleToggleDeleteDialog = ({
    id = 0,
    description = "",
  }: ModalToprops) => {
    setListTodialogProps({ id, description });
    setToggleDeleteDomainDialog(!toggleDeleteDomainDialog);
  };

  return (
    <div>
      {!data && (
        <CardMessage description="Adicione um domínio para começar um novo projeto." />
      )}
      {!data && (
        <GridWrapper flex justifyContentCenter marginTop="5vh">
          <FormAddDomain />
        </GridWrapper>
      )}
      <ListContainer>
        {data &&
          data.map((item: any) => (
            <ListItem
              description={item.domain_name}
              descriptionUrl={item.site_url}
              itemId={item.id}
              handleDeleteAction={handleToggleDeleteDialog}
              handleEditAction={() => {}}
            />
          ))}
        <GridWrapper flex justifyContentEnd marginTop="60px">
          <button
            onClick={handleToggleDialog}
            onKeyPress={handleToggleDialog}
            type="button"
            style={{
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <img
              src={PlusIcon}
              alt="add domain"
              style={{ cursor: "pointer", width: "30px" }}
            />
          </button>
        </GridWrapper>
      </ListContainer>
      <BasicDialog
        dialogIsOpen={toggleAddDomainDialog}
        onClose={handleToggleDialog}
        bodyContent={
          <FormAddDomain onModal externalAction={handleToggleDialog} />
        }
        dialogTitle="Adicione um novo domínio"
      />
      <DialogDeleteDomain
        toggleDeleteDomainDialog={toggleDeleteDomainDialog}
        handleToggleDialog={handleToggleDeleteDialog}
        listTodialogProps={listTodialogProps}
      />
    </div>
  );
};

export default Domains;
