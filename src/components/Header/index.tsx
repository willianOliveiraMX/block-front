import React, { useState } from "react";
import LogoIcon from "../../icons/logo.svg";
import LoginIcon from "../../icons/login.svg";
import ProfileMenu from "../ProfileMenu";
import {
  LogoImage,
  HeaderStyled,
  LoginIconStyled,
  MenuWrapper,
  MenuItem,
  LoginMenuWrapper,
} from "./index.style";

const Header = (): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState("domain");
  const [openProfileMenu, setOpenProfileMenu] = useState(false);

  const handleSelectedItem = (itemDescription: string) => {
    setSelectedItem(itemDescription);
  };

  const handleOpenProfileMenu = () => {
    setOpenProfileMenu(!openProfileMenu);
  };

  return (
    <HeaderStyled>
      <div>
        <LogoImage src={LogoIcon} alt="logo" />
      </div>
      <MenuWrapper>
        <MenuItem
          backGroundColor={selectedItem === "domain"}
          onClick={() => {
            handleSelectedItem("domain");
          }}
        >
          Dominios
        </MenuItem>
        <MenuItem
          backGroundColor={selectedItem === "resources"}
          onClick={() => {
            handleSelectedItem("resources");
          }}
        >
          Recursos
        </MenuItem>

        <LoginMenuWrapper>
          <LoginIconStyled
            src={LoginIcon}
            alt="login"
            onClick={handleOpenProfileMenu}
          />
          {openProfileMenu && <ProfileMenu />}
        </LoginMenuWrapper>
      </MenuWrapper>
    </HeaderStyled>
  );
};

export default Header;
