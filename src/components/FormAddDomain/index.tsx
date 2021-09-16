import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import BasicButton from "../BasicButton";
import GridWrapper from "../BasicGrid";
import BasicInput from "../BasicInput";
import { FormContainer } from "../FormContainer";
import FormDomainContainer from "./index.style";
import PlusIcon from "../../icons/plusicon.svg";

interface FormDomain {
  onModal?: boolean;
  externalAction?: () => void;
}

const defaultProps = {
  onModal: false,
  externalAction: () => {},
};

const FormAddDomain = ({
  onModal,
  externalAction,
}: FormDomain): JSX.Element => {
  const [loginFormRules, setLoginFormRules] = useState([
    {
      description: "text",
      value: "",
      isOnError: false,
      errorMessage: "Por favor, insira um nome menor que 40 caracteres!",
    },
    {
      description: "urlSite",
      value: "",
      isOnError: false,
      errorMessage: "A URL do site deve respeitar o padrão",
    },
  ]);

  const handleExternalAction = () => {
    if (externalAction) {
      externalAction();
    }
  };
  const queryClient = useQueryClient();

  const createDomain = useMutation(async (newDomain: unknown) => {
    const response = axios.post("/domains", newDomain);
    handleExternalAction();

    const { data = {} } = await response;
    queryClient.setQueryData("domainList", (old: any) => {
      return [...old, data];
    });
    return response;
  });

  const handleSubmitForm = () => {
    const [domainNameValue, urlSiteValues] = loginFormRules;

    const domainValues = {
      domain_name: domainNameValue.value,
      domain_schema: {
        name: domainNameValue.value,
        content: "",
      },
      site_url: urlSiteValues.value,
      user_owner: 1,
    };

    createDomain.mutate(domainValues);
  };

  return (
    <div>
      {!onModal && (
        <GridWrapper flex justifyContentCenter>
          <img src={PlusIcon} alt="add domain" width="30px" />
        </GridWrapper>
      )}
      <FormDomainContainer boxShadow={onModal}>
        <FormContainer
          loginRules={loginFormRules}
          setLoginRules={setLoginFormRules}
        >
          <BasicInput label="Nome do domínio" type="text" description="text" />
          <BasicInput label="URL do site" type="text" description="urlSite" />
          <GridWrapper flex justifyContentEnd marginTop="15px">
            {onModal ? (
              <>
                <BasicButton
                  handleForm={handleExternalAction}
                  description="Cancelar"
                  secondary
                  validInputOff
                />
                <BasicButton
                  handleForm={handleSubmitForm}
                  description="Salvar"
                />
              </>
            ) : (
              <BasicButton
                handleForm={handleSubmitForm}
                description="Adicionar"
              />
            )}
          </GridWrapper>
        </FormContainer>
      </FormDomainContainer>
    </div>
  );
};

FormAddDomain.defaultProps = defaultProps;

export default FormAddDomain;
