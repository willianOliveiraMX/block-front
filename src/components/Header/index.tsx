import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
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

interface HeaderInterface {
  isLoginPage: boolean;
  toggleHeader: boolean;
}

const Header = ({
  isLoginPage,
  toggleHeader,
}: HeaderInterface): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState("domain");
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [redirectLink, setRedirectLink] = useState("");

  const handleSelectedItem = (itemDescription: string) => {
    setSelectedItem(itemDescription);
    setRedirectLink(itemDescription);
  };

  const handleOpenProfileMenu = () => {
    setOpenProfileMenu(!openProfileMenu);
  };

  return (
    <HeaderStyled toggle={toggleHeader}>
      <div>
        <LogoImage src={LogoIcon} alt="logo" />
      </div>
      <MenuWrapper>
        {!isLoginPage && (
          <>
            <MenuItem
              backGroundColor={selectedItem === "/domains"}
              onClick={() => {
                handleSelectedItem("/domains");
              }}
            >
              Dominios
            </MenuItem>
            <MenuItem
              backGroundColor={selectedItem === "/resources"}
              onClick={() => {
                handleSelectedItem("/resources");
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
          </>
        )}
        {isLoginPage && (
          <>
            <MenuItem
              backGroundColor={selectedItem === "cadatrar"}
              onClick={() => {
                handleSelectedItem("cadatrar");
              }}
            >
              Cadatrar
            </MenuItem>
            <MenuItem
              backGroundColor={selectedItem === "login"}
              onClick={() => {
                handleSelectedItem("login");
              }}
            >
              Login
            </MenuItem>
          </>
        )}
        {!!redirectLink.length && <Redirect to={redirectLink} />}
      </MenuWrapper>
    </HeaderStyled>
  );
};

export default Header;
