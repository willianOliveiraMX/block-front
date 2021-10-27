import React, { useState } from "react";
import BackgroundPlatform from "./index.style";
import SideMenu from "./SideMenu";
import GridPlatform from "../../components/GridPlatform";

const Platform = (): JSX.Element => {
  const [pageId, setPageId] = useState("0");
  return (
    <BackgroundPlatform>
      <SideMenu setPageId={setPageId} />
      <div />
      <GridPlatform pageId={pageId} />
    </BackgroundPlatform>
  );
};

export default Platform;
