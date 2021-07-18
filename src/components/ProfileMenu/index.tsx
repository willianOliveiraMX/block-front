import React from "react";
import { MenuWrapper, MenuList, MenuItem } from "./index.style";

const ProfileMenu = (): JSX.Element => {
  return (
    <MenuWrapper>
      <MenuList>
        <MenuItem>Perfil</MenuItem>
        <MenuItem>Sair</MenuItem>
      </MenuList>
    </MenuWrapper>
  );
};

export default ProfileMenu;
