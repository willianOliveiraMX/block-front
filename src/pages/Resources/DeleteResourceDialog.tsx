import axios from "axios";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import BasicButton from "../../components/BasicButton";
import GridWrapper from "../../components/BasicGrid";
import BasicTextBox from "../../components/BasicTextBox/BasicTextBox";

const DeleteResourceDialog = ({
  resourceId,
  handleClose,
}: {
  resourceId: number;
  handleClose: () => void;
}): JSX.Element => {
  const queryClient = useQueryClient();

  const deleteResource = useMutation(async (id: number) => {
    const response = axios.delete(`/external-content/${id}`);
    const { data: content = {} } = await response;
    queryClient.setQueryData("resourceList", () => {
      handleClose();
      return [...content];
    });
  });

  const hadleDeleteAction = () => {
    deleteResource.mutate(resourceId);
  };
  return (
    <div>
      <BasicTextBox>
        Você tem certeza que deseja deletar esse recurso? Essa ação não pode ser
        defeita.
      </BasicTextBox>
      <GridWrapper margin="26px" flex justifyContentEnd>
        <BasicButton
          handleForm={handleClose}
          description="Cancelar"
          secondary
          validInputOff
        />
        <BasicButton handleForm={hadleDeleteAction} description="Deletar" />
      </GridWrapper>
    </div>
  );
};

export default DeleteResourceDialog;
