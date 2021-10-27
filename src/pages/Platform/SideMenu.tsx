import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Draggable from "react-draggable";
import {
  SideBarMenu,
  ButtonMenu,
  WrapperMenuItens,
  WrapperMenuPages,
} from "./index.style";
import PagesList from "./PagesList";
import componentIcon from "./icons/componentsIcon.svg";
import pagesIcon from "./icons/pagesIcon.svg";
import gridsIcon from "./icons/gridsIcon.svg";
import paragraphIcon from "./icons/componentsIcons/paragraphIcon.svg";
import buttonIcon from "./icons/componentsIcons/buttonIcon.svg";
import linkIcon from "./icons/componentsIcons/linkIcon.svg";
import inputIcon from "./icons/componentsIcons/inputIcon.svg";
import titleIcon from "./icons/componentsIcons/titleIcon.svg";
import imageIcon from "./icons/componentsIcons/imageIcon.svg";
import tableIcon from "./icons/componentsIcons/tableIcon.svg";
import sliderIcon from "./icons/componentsIcons/sliderIcon.svg";
import searchIcon from "./icons/componentsIcons/searchIcon.svg";
import tabsIcon from "./icons/componentsIcons/tabsIcon.svg";
import formIcon from "./icons/componentsIcons/formIcon.svg";
import dropdownIcon from "./icons/componentsIcons/dropdownIcon.svg";
import selectIcon from "./icons/componentsIcons/selectIcon.svg";
import radioboxIcon from "./icons/componentsIcons/radioboxIcon.svg";
import { getPagesByDomains } from "../../services/queries";

const componentsList: JSX.Element[] = [
  <img src={paragraphIcon} alt="paragraph item here" />,
  <img src={buttonIcon} alt="button item here" />,
  <img src={linkIcon} alt="link item here" />,
  <img src={titleIcon} alt="title item here" />,
  <img src={imageIcon} alt="item here" />,
  <img src={tableIcon} alt="table item here" />,
  <div>
    <img src={inputIcon} alt="input item here" />
    <img src={searchIcon} alt="search item here" />
  </div>,
  <img src={tabsIcon} alt="tabs item here" />,
  <img src={formIcon} alt="form item here" />,
  <img src={selectIcon} alt="selectIcon item here" />,
  <img src={sliderIcon} alt="slider item here" />,
  <div>
    <img src={dropdownIcon} alt="dropdown item here" />
    <img src={radioboxIcon} alt="radiobox item here" />{" "}
  </div>,
];

interface SideMenuProps {
  setPageId: Dispatch<SetStateAction<string>>;
}

const SideMenu = ({ setPageId }: SideMenuProps): JSX.Element => {
  const { domainId = "" }: { domainId: string } = useParams();
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [openPagesSideMenu, setOpenPagesSideMenu] = useState(false);
  const [menuItens, setMenuItens] = useState([<span />]);

  const handleOpenSideMenu = (value: string) => {
    if (value === "components") {
      setMenuItens(componentsList);
      setOpenSideMenu(!openSideMenu);
      setOpenPagesSideMenu(false);
    }
    if (value === "pages") {
      setOpenPagesSideMenu(!openPagesSideMenu);
      setOpenSideMenu(false);
    }
  };

  const { data = [] } = useQuery("pagesDomains", async () => {
    const result = await getPagesByDomains(domainId);
    return result;
  });

  useEffect(() => {
    if (data.length) {
      setPageId(data[0]?.id);
    }
  }, [data, setPageId]);

  return (
    <SideBarMenu>
      <ButtonMenu
        onClick={() => handleOpenSideMenu("components")}
        value="components"
      >
        <img src={componentIcon} alt="menu icon" />
      </ButtonMenu>
      <ButtonMenu onClick={() => handleOpenSideMenu("pages")} value="pages">
        <img src={pagesIcon} alt="menu icon" />
      </ButtonMenu>
      <ButtonMenu onClick={() => handleOpenSideMenu("grids")} value="grids">
        <img src={gridsIcon} alt="menu icon" />
      </ButtonMenu>
      <WrapperMenuItens openSideMenu={openSideMenu}>
        {menuItens.map((item) => item)}
      </WrapperMenuItens>
      <WrapperMenuPages openSideMenu={openPagesSideMenu}>
        {openPagesSideMenu && <PagesList setPageId={setPageId} list={data} />}
      </WrapperMenuPages>
    </SideBarMenu>
  );
};

export default SideMenu;
