import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { BasicDialog } from "../BasicDialog";
import { FormContainer } from "../FormContainer";
import BasicInput from "../BasicInput";
import GridWrapper from "../BasicGrid";
import BasicButton from "../BasicButton";

interface ModalToprops {
  id?: number;
  description?: string;
}

interface DeleteDomain {
  toggleDeleteDomainDialog: boolean;
  handleToggleDialog: ({ id, description }: ModalToprops) => void;
  listTodialogProps: ModalToprops;
}

const DialogDeleteDomain = ({
  toggleDeleteDomainDialog,
  handleToggleDialog,
  listTodialogProps,
}: DeleteDomain): JSX.Element => {
  const handleDialog = () => {
    handleToggleDialog({});
  };
  const [internalDescription, setInternalDescription] = useState("");

  useEffect(() => {
    setInternalDescription(listTodialogProps?.description || "");
  }, [listTodialogProps]);

  const handleValidInput = (value: string): boolean => {
    const result = listTodialogProps.description === value;
    return !result;
  };

  const [loginFormRules, setLoginFormRules] = useState([
    {
      description: "custom",
      value: "",
      isOnError: false,
      errorMessage:
        "Por favor, insira o nome domínio, de acordo com a listagem.",
      validateFunction: handleValidInput,
    },
  ]);
  const deleteDomain = useMutation((id: number) =>
    axios.delete(`/domains/${id}`)
  );

  const handleDeleteDomain = () => {
    deleteDomain.mutate(listTodialogProps.id || 0);
    handleDialog();
  };

  const BodyContent = (): JSX.Element => {
    return (
      <FormContainer
        loginRules={loginFormRules}
        setLoginRules={setLoginFormRules}
      >
        <GridWrapper margin="24px">
          <BasicInput
            label="Domínio a ser deletado"
            type="text"
            description="custom"
          />
          <GridWrapper flex justifyContentEnd marginTop="15px">
            <BasicButton
              handleForm={handleDialog}
              description="Cancelar"
              secondary
              validInputOff
            />
            <BasicButton
              handleForm={handleDeleteDomain}
              description="Deletar"
            />
          </GridWrapper>
        </GridWrapper>
      </FormContainer>
    );
  };

  return (
    <BasicDialog
      dialogIsOpen={toggleDeleteDomainDialog}
      onClose={handleDialog}
      bodyContent={<BodyContent />}
      dialogTitle={`Escreva o nome do domínio “${listTodialogProps.description}” e click em deletar. Esta ação não poderá ser desfeita.`}
    />
  );
};

export default DialogDeleteDomain;
