import React, { useEffect, useState, useRef } from "react";
import { useQuery } from "react-query";
import { getPageById } from "../../services/queries";
import GridPlatformContainer, {
  InternalContainer,
  InternalGridHeader,
  PageName,
  ResponsiveIcons,
  PageBreadcrumbs,
} from "./index.style";
import smartPhone from "./icons/smartPhone.svg";
import tablet from "./icons/tablet.svg";
import desktop from "./icons/desktop.svg";
import edit from "./icons/edit.svg";
import DragContainer from "./DragContainer";

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
  const { data, refetch, remove } = useQuery("getPageById", async () => {
    const result = await getPageById(pageId || "");
    return result;
  });

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
              <DragContainer
                contentList={hasContentList}
                setHasContentList={setHasContentList}
                hasContent={hasContentList[0]}
                listRef={refsList}
                setRefsList={setRefsList}
                id={0}
              />
              <DragContainer
                contentList={hasContentList}
                setHasContentList={setHasContentList}
                hasContent={hasContentList[1]}
                listRef={refsList}
                setRefsList={setRefsList}
                id={1}
              />
              <DragContainer
                contentList={hasContentList}
                setHasContentList={setHasContentList}
                hasContent={hasContentList[2]}
                listRef={refsList}
                setRefsList={setRefsList}
                id={2}
              />
              <DragContainer
                contentList={hasContentList}
                setHasContentList={setHasContentList}
                hasContent={hasContentList[3]}
                listRef={refsList}
                setRefsList={setRefsList}
                id={3}
              />
            </InternalContainer>
          </GridPlatformContainer>
        </>
      )}
    </>
  );
};

export default GridPlatform;
