import React from "react";
import BackgroundPlatform from "./index.style";
import SideMenu from "./SideMenu";

const Platform = (): JSX.Element => {
  return (
    <BackgroundPlatform>
      <SideMenu />
      <div />
    </BackgroundPlatform>
  );
};

export default Platform;
