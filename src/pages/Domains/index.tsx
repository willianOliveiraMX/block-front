import React from "react";
import { useQuery } from "react-query";
import Header from "../../components/Header";
import CardMessage from "../../components/CardMessage";
import FormAddDomain from "../../components/FormAddDomain";
import GridWrapper from "../../components/BasicGrid";
import getDomains from "../../services/queries";
import ListItem from "../../components/ListItem";
import ListContainer from "./index.style";
import PlusIcon from "../../icons/plusicon.svg";

const Domains = (): JSX.Element => {
  const { data } = useQuery("domainList", getDomains);

  return (
    <div>
      <Header isLoginPage={false} />
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
            />
          ))}
        <GridWrapper flex justifyContentEnd marginTop="60px">
          <img
            src={PlusIcon}
            alt="add domain"
            style={{ cursor: "pointer", width: "30px" }}
          />
        </GridWrapper>
      </ListContainer>
    </div>
  );
};

export default Domains;
