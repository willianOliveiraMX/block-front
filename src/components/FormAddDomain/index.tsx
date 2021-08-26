import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import BasicButton from "../BasicButton";
import GridWrapper from "../BasicGrid";
import BasicInput from "../BasicInput";
import { FormContainer } from "../FormContainer";
import FormDomainContainer from "./index.style";
import PlusIcon from "../../icons/plusicon.svg";

const FormAddDomain = (): JSX.Element => {
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

  const createDomain = useMutation((newDomain: any) =>
    axios.post("/domains", newDomain)
  );

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
      <GridWrapper flex justifyContentCenter>
        <img src={PlusIcon} alt="add domain" width="30px" />
      </GridWrapper>
      <FormDomainContainer>
        <FormContainer
          loginRules={loginFormRules}
          setLoginRules={setLoginFormRules}
        >
          <BasicInput label="Nome do domínio" type="text" description="text" />
          <BasicInput label="URL do site" type="text" description="urlSite" />
          <GridWrapper flex justifyContentEnd marginTop="15px">
            <BasicButton
              handleForm={handleSubmitForm}
              description="Adicionar"
            />
          </GridWrapper>
        </FormContainer>
      </FormDomainContainer>
    </div>
  );
};

export default FormAddDomain;
