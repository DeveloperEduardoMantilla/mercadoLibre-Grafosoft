import React, { useState } from "react";
import { AcmeLogo } from "./AcmeLogo.jsx";

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link
} from "@nextui-org/react";

export default function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ["Home", "About Me"];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent
        className="sm:hidden"
        justify="start"
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent
        className="sm:hidden pr-3"
        justify="center"
      >
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ECO-GRAFOSOFT</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="end"
      >
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ECO-GRAFOSOFT</p>
        </NavbarBrand>

        <NavbarItem>
          <Link
            href="/"
            color="foreground"
            aria-current="page"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/aboutme"
          >
            About Me
          </Link>
        </NavbarItem>
        
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
