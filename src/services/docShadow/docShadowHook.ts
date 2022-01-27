import { useState, useEffect } from "react";
import DocumentShadow, { Tree, Component, NodeStatement } from "./documentTree";

const useDocShadowHook = () => {
  const [cardGridContainer, setCardGridContainer] = useState<Tree | undefined>({
    root: [],
  });
  const [stateDoc, setStateDoc] = useState<NodeStatement | undefined>();
  useEffect(() => {
    const doc = DocumentShadow(
      {
        name: "header",
        value: "section",
        childrens: [],
        htmlElementName: "div",
      },
      {
        root: [],
      },
      setCardGridContainer
    );
    setStateDoc(doc);
  }, []);
  const setNewChild = (gridId: string) => {
    // console.log(cardGridContainer);
    if (!stateDoc) return;
    // stateDoc.setParentNode({
    //   name: `teste-${Math.random()}`,
    //   value: "section",
    //   childrens: [],
    // });
    stateDoc.setChildren(gridId, {
      name: `teste-${Math.random()}`,
      value: "section",
      childrens: [],
      htmlElementName: "div",
    });
  };

  const deleteChildren = (gridId: string) => {
    if (!stateDoc) return;

    stateDoc.deleteNode(gridId);
  };

  const editChildren = (gridId: string) => {
    // if (!stateDoc) return;
    // stateDoc.editNode(gridId, { newData: { key: "name", newValue: "teste" } });
  };

  return [cardGridContainer, setNewChild, deleteChildren] as const;
};

export default useDocShadowHook;
