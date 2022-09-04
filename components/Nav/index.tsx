import type { NextPage } from "next";
import { useEffect, useState } from "react";
import {
  Logo,
  MenuIconContainer,
  MobileMenu,
  MobileMenuHeader,
  NavContainer,
  NavItem,
  NavItems,
  SearchContainer,
  SearchSection,
} from "./style";

import { FiSearch } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

export const Nav: NextPage = () => {
    const openMenu = () => {
        document.getElementById("mobileMenu").style.display = "flex";
        setTimeout(() => { 
            document.getElementById("mobileMenu").style.width = "295px";

        }, 100)
  };
    const closeMenu = () => {
      
        document.getElementById("mobileMenu").style.width = "0px";
        setTimeout(() => {
            document.getElementById("mobileMenu").style.display = "none";
            
        }, 800);
    };

  return (
    <NavContainer>
      <Logo>Ecommerce</Logo>
      <NavItems>
        <NavItem>Home</NavItem>
        <NavItem>Home</NavItem>
        <NavItem>Home</NavItem>
        <NavItem>Home</NavItem>
        <NavItem>Home</NavItem>
        <NavItem>Home</NavItem>
      </NavItems>
      <SearchSection>
        <SearchContainer>
          <input type="text" placeholder="Search..." />
          <div>
            <FiSearch size={20} color="white" />
          </div>
        </SearchContainer>
      </SearchSection>
      <MenuIconContainer>
        <BiMenuAltRight size={28} onClick={openMenu} />
      </MenuIconContainer>
      <MobileMenu id="mobileMenu">
        <MobileMenuHeader >
          <GrClose size={28} onClick={closeMenu} />
        </MobileMenuHeader>
      </MobileMenu>
    </NavContainer>
  );
};
