import React, { useEffect, useState, useRef } from "react";
import { useQuery } from "react-query";
import { getPageById } from "../../services/queries";
import GridPlatformContainer, {
  InternalContainer,
  InternalGridHeader,
  PageName,
  ResponsiveIcons,
  PageBreadcrumbs,
  GridDragAnDropContainer,
  GridDragAndDropLine,
} from "./index.style";
import smartPhone from "./icons/smartPhone.svg";
import tablet from "./icons/tablet.svg";
import desktop from "./icons/desktop.svg";
import edit from "./icons/edit.svg";
import DragContainer from "./DragContainer";
import CardGridContainer from "../../types";
import GridManager from "../GridManager";
import {
  case1,
  case2,
  case3,
  case4,
  case5,
  case6,
  case7,
  case8,
  case9,
} from "./gridOptions";
import DocumentShadow, { Tree } from "../../services/docShadow/documentTree";
import ItemComponent from "./itemComponent";
import useDocShadowHook from "../../services/docShadow/docShadowHook";

// const doc = DocumentShadow({ name: "header", value: "div", childrens: [] });

// doc.setParentNode({ name: "body", value: "div", childrens: [] });
// const idHeader = doc.tree.root.find(
//   (element: { name: string }) => element.name === "header"
// );

// const idBody = doc.tree.root.find(
//   (element: { name: string }) => element.name === "body"
// );

// doc.setChildren(idHeader?.id, {
//   name: "menu",
//   value: "div",
//   childrens: [],
// });

// doc.setChildren(idHeader.id, {
//   name: "button",
//   value: "div",
//   childrens: [],
// });
// console.log(doc);
// doc.setChildren(idBody.id, {
//   name: "form",
//   value: "div",
//   childrens: [],
// });

// doc.editNode(idHeader.id, { key: "value", newValue: "section" });
// doc.deleteNode(idHeader.id);

// doc.deleteNode(idMenu.id);
// doc.deleteNode(doc.tree.root[0].id);

interface GridPlatformProps {
  pageId: string;
}

const GridPlatform = ({ pageId }: GridPlatformProps): JSX.Element => {
  const [routeFullName, setRouteFullName] = useState("");
  const [refsList, setRefsList] = useState([
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]);
  const [hasContentList, setHasContentList] = useState([
    false,
    false,
    true,
    false,
  ]);
  // const [cardGridContainer, setCardGridContainer] = useState<
  //   CardGridContainer[][] | []
  // >([]);
  // const [cardGridContainer, setCardGridContainer] = useState<
  //   Tree | undefined
  // >();
  const [cardGridContainer, setNewChild, deleteChildren] = useDocShadowHook();
  const { data, refetch, remove } = useQuery("getPageById", async () => {
    const result = await getPageById(pageId || "");
    return result;
  });
  // console.log(cardGridContainer);
  // const docS = DocumentShadow({
  //   name: "header",
  //   value: "section",
  //   childrens: [],
  // });
  console.count("reload");
  // docS.setParentNode({
  //   name: "body",
  //   value: "div",
  //   childrens: [],
  // });

  useEffect(() => {
    refetch();
    return () => {
      remove();
    };
  }, [pageId, refetch, remove]);

  useEffect(() => {
    if (!data) return;
    const {
      domains: { site_url: siteUrl = "" } = "",
      route_name: routeName = "",
    } = data;
    const routeNameFull = `${siteUrl}/${routeName.replaceAll(" ", "_")}`;
    setRouteFullName(routeNameFull.toLowerCase());
  }, [data]);

  const removeChildren = (gridId: string | undefined) => {
    if (!gridId) return;
    deleteChildren(gridId);
  };

  const addNewChildren = (gridId: string | undefined) => {
    if (!gridId) return;
    setNewChild(gridId);
  };

  return (
    <>
      {!!data && (
        <>
          <GridPlatformContainer>
            <InternalGridHeader>
              <div>
                <PageName>{data.route_name}</PageName>
              </div>
              <ResponsiveIcons>
                <button type="button">
                  <img src={smartPhone} alt="smartPhone icon" />
                </button>
                <button type="button">
                  <img src={tablet} alt="tablet icon" />
                </button>
                <button type="button">
                  <img src={desktop} alt="desktop icon" />
                </button>
              </ResponsiveIcons>
              <div>
                <PageBreadcrumbs>
                  <span>{routeFullName}</span>
                  <img src={edit} alt="edit button" />
                </PageBreadcrumbs>
              </div>
            </InternalGridHeader>
            <InternalContainer>
              <GridDragAnDropContainer>
                {cardGridContainer?.root &&
                  cardGridContainer?.root.map((item) => (
                    <ItemComponent
                      item={item}
                      addChildren={addNewChildren}
                      removeChildren={removeChildren}
                    />
                  ))}
                {/* {!!cardGridContainer.length &&
                  cardGridContainer.map((item = []) => {
                    return (
                      <GridDragAndDropLine
                        display={item[0].containerLineStyle.display}
                        justifyContent={
                          item[0].containerLineStyle.justifyContent
                        }
                      >
                        {item.map((elementItem, elementItemIdex) => {
                          return (
                            <>
                              <DragContainer
                                contentList={[false, false]}
                                setHasContentList={() => {}}
                                hasContent={!!elementItem.components}
                                listRef={elementItem.gridCardRef}
                                setRefsList={() => {}}
                                id={elementItemIdex}
                                containerLineType={
                                  elementItem.containerLineType
                                }
                                dragContainerStyle={elementItem.cardStyle}
                                cardGridContainer={cardGridContainer}
                                setCardGridContainer={setCardGridContainer}
                                cardItem={elementItem}
                              />
                            </>
                          );
                        })}
                      </GridDragAndDropLine>
                    );
                  })} */}
              </GridDragAnDropContainer>
              {/* <GridManager handleDefaultGridLine={handleDefaultGridLine} /> */}
            </InternalContainer>
          </GridPlatformContainer>
        </>
      )}
    </>
  );
};

export default GridPlatform;
