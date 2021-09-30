import axios from "axios";
import React, { useState } from "react";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import BasicButton from "../../components/BasicButton";
import GridWrapper from "../../components/BasicGrid";
import BasicInput from "../../components/BasicInput";
import { FormContainer } from "../../components/FormContainer";

const AddResourceDialog = (): JSX.Element => {
  const [loginFormRules, setLoginFormRules] = useState([
    {
      description: "resourceName",
      value: "",
      isOnError: false,
      errorMessage: "Por favor, insira um nome menor que 40 caracteres!",
      validateFunction: (p: string) => false,
    },
    {
      description: "resourceType",
      value: "",
      isOnError: false,
      errorMessage: "Por favor isira um tipo válido",
      validateFunction: (p: string) => false,
    },
    {
      description: "descriptionResource",
      value: "",
      isOnError: false,
      errorMessage: "Por favor isira um recurso válido",
      validateFunction: (p: string) => false,
    },
    {
      description: "descriptionEndpoint",
      value: "",
      isOnError: false,
      errorMessage: "Por favor isira um endpoint válido",
      validateFunction: (p: string) => false,
    },
  ]);

  const queryClient = useQueryClient();

  const createResource = useMutation(async (newResource: unknown) => {
    const response = axios.post("/external-content", newResource);
    // handleExternalAction();

    const { data = {} } = await response;
    queryClient.setQueryData("resourceList", (old: any) => {
      return [...old, data];
    });
    return response;
  });

  const handleSubmitForm = () => {
    const [
      resourceName,
      resourceType,
      descriptionResource,
      descriptionEndpoint,
    ] = loginFormRules;

    const body = {
      title: resourceName.value,
      external_content_type: 2,
      external_content_schema: {
        name: resourceName.value,
        description: descriptionResource.value,
        endpoint: descriptionEndpoint.value,
        method: "post",
        params: [],
      },
      user_owner: 1,
      page: 1,
    };
    console.log(loginFormRules);
    createResource.mutate(body);
  };

  return (
    <div style={{ width: "645px" }}>
      <GridWrapper margin="26px">
        <FormContainer
          loginRules={loginFormRules}
          setLoginRules={setLoginFormRules}
        >
          <div style={{ maxWidth: "80%" }}>
            <BasicInput label="Nome" type="text" description="resourceName" />
            <BasicInput label="Tipo" type="text" description="resourceType" />
          </div>
          <GridWrapper marginTop="50px">
            <div style={{ maxWidth: "80%" }}>
              <BasicInput
                label="Descrição"
                type="text"
                description="descriptionResource"
              />
              <BasicInput
                label="Endpoint"
                type="text"
                description="descriptionEndpoint"
              />
            </div>
            <GridWrapper flex justifyContentEnd marginTop="15px">
              <>
                <BasicButton
                  handleForm={() => {}}
                  description="Cancelar"
                  secondary
                  validInputOff
                />
                <BasicButton
                  handleForm={handleSubmitForm}
                  description="Salvar"
                />
              </>
            </GridWrapper>
          </GridWrapper>
        </FormContainer>
      </GridWrapper>
    </div>
  );
};

export default AddResourceDialog;
