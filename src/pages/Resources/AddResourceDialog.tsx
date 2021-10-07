import axios from "axios";
import React, { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import BasicButton from "../../components/BasicButton";
import GridWrapper from "../../components/BasicGrid";
import BasicInput from "../../components/BasicInput";
import { FormContainer } from "../../components/FormContainer";
import { getOneResource } from "../../services/queries";

interface ResourceDialog {
  resourceID?: number | null;
}

const defaultProps = {
  resourceID: null,
};
interface ResourceItem {
  created_at: string;
  updated_at: string;
  id: number;
  title: string;
  external_content_schema: {
    endpoint: string;
    description: string;
  };
  external_content_type: {
    description: string;
    id: number;
    name: string;
    updated_at: string;
    created_at: string;
    config_schema: {
      api_key: string;
      api_secret: string;
      description: string;
      name: string;
    };
  };
}

const AddResourceDialog = ({ resourceID }: ResourceDialog): JSX.Element => {
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

  const [resourceNameValue, setResourceNameValue] = useState("");
  const [resourceTypeValue, setResourceTypeValue] = useState("");
  const [descriptionResourceValue, setDescriptionResourceValue] = useState("");
  const [descriptionEndpointValue, setDescriptionEndpointValue] = useState("");

  const setInputValues = ({
    name,
    title,
    description,
    endpoint,
  }: {
    name: string;
    title: string;
    description: string;
    endpoint: string;
  }) => {
    const [
      resourceName,
      resourceType,
      descriptionResource,
      descriptionEndpoint,
    ] = loginFormRules;

    setResourceNameValue(title);
    setResourceTypeValue(name);
    setDescriptionResourceValue(description);
    setDescriptionEndpointValue(endpoint);
  };

  useEffect(() => {
    const handleResourceItemResponse = async (item: Promise<ResourceItem>) => {
      const {
        title,
        external_content_type: { name = "" } = {},
        external_content_schema: { description = "", endpoint = "" } = {},
      } = {
        ...(await item),
      };

      setInputValues({
        name,
        title,
        description,
        endpoint,
      });
    };

    if (!resourceID) return;
    const resourceItem = getOneResource(resourceID);
    handleResourceItemResponse(resourceItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resourceID]);

  const queryClient = useQueryClient();

  const createResource = useMutation(async (newResource: unknown) => {
    const response = axios.post("/external-content", newResource);
    const { data: content = {} } = await response;
    queryClient.setQueryData("resourceList", (old: any) => {
      return [...old, content];
    });
    return response;
  });

  interface EditResource {
    title: string;
    external_content_schema: {
      name: string;
      description: string;
      endpoint: string;
      method: string;
    };
    user_owner: number;
    id: number;
  }

  const editResource = useMutation(async (editResourceValues: EditResource) => {
    const response = axios.put(
      `/external-content/${editResourceValues?.id || 0}`,
      editResourceValues
    );
    // handleExternalAction();

    const { data: content = {} } = await response;
    queryClient.setQueryData("resourceList", () => {
      return [...content];
    });
    return response;
  });

  const handleSubmitForm = (
    resourceName: string,
    resourceType: string,
    descriptionResource: string,
    descriptionEndpoint: string
  ) => {
    const body = {
      title: resourceName,
      external_content_type: 2,
      external_content_schema: {
        name: resourceName,
        description: descriptionResource,
        endpoint: descriptionEndpoint,
        method: "post",
        params: [],
      },
      user_owner: 1,
      page: 1,
    };
    createResource.mutate(body);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const [
      resourceName,
      resourceType,
      descriptionResource,
      descriptionEndpoint,
    ] = event.target;
    if (!resourceID) {
      handleSubmitForm(
        resourceName.value,
        resourceType.value,
        descriptionResource.value,
        descriptionEndpoint.value
      );
      return null;
    }

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
      id: resourceID,
    };

    editResource.mutate(body);
    return null;
  };

  return (
    <div style={{ width: "645px" }}>
      <GridWrapper margin="26px">
        <form onSubmit={handleSubmit}>
          <div style={{ maxWidth: "80%" }}>
            <BasicInput
              label="Nome"
              type="text"
              description="resourceName"
              inputValue={resourceNameValue}
            />

            <BasicInput
              label="Tipo"
              type="text"
              description="resourceType"
              inputValue={resourceTypeValue}
            />
          </div>
          <GridWrapper marginTop="50px">
            <div style={{ maxWidth: "80%" }}>
              <BasicInput
                label="Descrição"
                type="text"
                description="descriptionResource"
                inputValue={descriptionResourceValue}
              />
              <BasicInput
                label="Endpoint"
                type="text"
                description="descriptionEndpoint"
                inputValue={descriptionEndpointValue}
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
                <BasicButton handleForm={() => {}} description="Salvar" />
              </>
            </GridWrapper>
          </GridWrapper>
        </form>
      </GridWrapper>
    </div>
  );
};

AddResourceDialog.defaultProps = defaultProps;

export default AddResourceDialog;
