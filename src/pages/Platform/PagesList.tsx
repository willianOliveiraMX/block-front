import React, { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getPagesByDomains } from "../../services/queries";
import PageItem, { InputField, AddPageIcon } from "./PagesList.style";
import addpage from "./icons/addPage.svg";

const PagesList = (): JSX.Element => {
  const { domainId = "" }: { domainId: string } = useParams();
  const [currentSelectPage, setCurrentSelectPage] = useState(0);
  const [newInputField, setNewInputField] = useState("");

  const queryClient = useQueryClient();

  const { data = [] } = useQuery("pagesDomains", async () => {
    const result = await getPagesByDomains(domainId);
    return result;
  });

  useEffect(() => {
    if (data.length) {
      setCurrentSelectPage(data[0].id);
    }
  }, [data]);

  const handleChangeNewInputValue = (event: any) => {
    const content = event.target.value;
    setNewInputField(content);
  };

  const createNewPage = useMutation(async (newPage: unknown) => {
    const response = axios.post("/pages", newPage);
    // handleExternalAction();

    const { data: responseData = {} } = await response;
    queryClient.setQueryData("pagesDomains", (old: any) => {
      return [...old, responseData];
    });
    console.log(responseData);
    setNewInputField("");
    return response;
  });

  const handleAddNewPage = () => {
    console.log(newInputField);
    if (!newInputField.length) return;
    const newPageBody = {
      route_name: newInputField,
      page_config_components_schema: {
        name: "Users",
      },
      domains: domainId,
    };

    createNewPage.mutate(newPageBody);
  };

  return (
    <div>
      {data.map((item: any) => (
        <PageItem
          key={item.id}
          isSelected={currentSelectPage === item.id}
          onClick={() => {
            setCurrentSelectPage(item.id);
          }}
        >
          {item.route_name}
        </PageItem>
      ))}
      <InputField value={newInputField} onChange={handleChangeNewInputValue} />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          type="button"
          style={{
            border: "none",
            backgroundColor: "transparent",
            outline: "none",
            cursor: "pointer",
          }}
          onClick={handleAddNewPage}
        >
          <AddPageIcon src={addpage} alt="add page icon" />
        </button>
      </div>
    </div>
  );
};

export default PagesList;
