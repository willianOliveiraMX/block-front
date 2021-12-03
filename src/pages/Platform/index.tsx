import React, { useState, useEffect } from "react";
import BackgroundPlatform from "./index.style";
import SideMenu from "./SideMenu";
import GridPlatform from "../../components/GridPlatform";

interface PlatformProps {
  handleHeaderSwich: (p: boolean) => void;
}

const Platform = ({ handleHeaderSwich }: PlatformProps): JSX.Element => {
  const [pageId, setPageId] = useState("0");

  useEffect(() => {
    if (!handleHeaderSwich) return;
    handleHeaderSwich(true);
  }, [handleHeaderSwich]);

  return (
    <BackgroundPlatform>
      <SideMenu setPageId={setPageId} handleHeaderSwich={handleHeaderSwich} />
      <div />
      <GridPlatform pageId={pageId} />
    </BackgroundPlatform>
  );
};

export default Platform;
