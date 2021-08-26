import React from "react";
import Header from "../../components/Header";
import CardMessage from "../../components/CardMessage";
import FormAddDomain from "../../components/FormAddDomain";
import GridWrapper from "../../components/BasicGrid";

const Domains = (): JSX.Element => {
  return (
    <div>
      <Header isLoginPage={false} />
      <CardMessage description="Adicione um domínio para começar um novo projeto." />
      <GridWrapper flex justifyContentCenter marginTop="5vh">
        <FormAddDomain />
      </GridWrapper>
    </div>
  );
};

export default Domains;
