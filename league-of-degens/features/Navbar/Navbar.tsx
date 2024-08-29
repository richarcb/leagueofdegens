import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import React from "react";
import NavbarItem from "./NavbarItem";
import { Button } from "@/components/ui/button";
import AuthButton from "@/components/AuthButton";

const Navbar = () => {
  return (
    <div className="flex justify-between mt-8">
      <Button>Sign in</Button>
      <div>
        <NavigationMenu className="">
          <NavigationMenuList className="flex">
            <NavbarItem href={"/"} label={"Home"} />
            <NavbarItem href={"/"} label={"History"} />
            <NavbarItem href={"/"} label={"Players"} />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <AuthButton />
    </div>
  );
};

export default Navbar;
