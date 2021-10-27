import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Draggable from "react-draggable";
import { getPageById } from "../../services/queries";
import GridPlatformContainer, {
  InternalContainer,
  InternalGridHeader,
  PageName,
  ResponsiveIcons,
  PageBreadcrumbs,
  DragCard,
  GridContainer,
} from "./index.style";
import smartPhone from "./icons/smartPhone.svg";
import tablet from "./icons/tablet.svg";
import desktop from "./icons/desktop.svg";
import edit from "./icons/edit.svg";

interface GridPlatformProps {
  pageId: string;
}

const GridPlatform = ({ pageId }: GridPlatformProps): JSX.Element => {
  const [routeFullName, setRouteFullName] = useState("");
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
  console.log(data);

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
              <GridContainer>
                <Draggable bounds="parent">
                  <DragCard>
                    <h1>aqui arrasta</h1>
                  </DragCard>
                </Draggable>
              </GridContainer>
              <GridContainer />
              <GridContainer />
              <GridContainer />
            </InternalContainer>
          </GridPlatformContainer>
        </>
      )}
    </>
  );
};

export default GridPlatform;
