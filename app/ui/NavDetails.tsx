"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { signout } from "@/actions/signout";
import { useState } from "react";
import { AcmeLogo } from "./Logo";
export default function NavDetail({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const path = usePathname();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <div className="bg-pink-400 w-full">
      <div className="bg-pink-400  max-w-6xl mx-auto">
        <Navbar
          className=" bg-pink-400  mx-auto  container max-w-6xl"
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
            <NavbarBrand>
              <AcmeLogo />
              <Link href="/" className="font-bold text-inherit">
                ACME
              </Link>
            </NavbarBrand>
          </NavbarContent>
          {!isAuthenticated && (
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <Link color="foreground" href="/tutors">
                  Find Tutors
                </Link>
              </NavbarItem>

              <NavbarItem>
                <Link color="foreground" href="#" aria-current="page">
                  Become Tutors
                </Link>
              </NavbarItem>
            </NavbarContent>
          )}
          <NavbarContent justify="end">
            {!isAuthenticated ? (
              <>
                <NavbarItem className="hidden lg:flex">
                  <Link color="foreground" href="/signin">
                    Login
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Button
                    as={Link}
                    color="default"
                    href="signup"
                    variant="flat"
                  >
                    Sign Up
                  </Button>
                </NavbarItem>
              </>
            ) : (
              <NavbarItem>
                <Button
                  type="button"
                  onClick={() => signout()}
                  color="default"
                  variant="flat"
                >
                  Sign out
                </Button>
              </NavbarItem>
            )}
          </NavbarContent>
          <NavbarMenu className="">
            {menuItems.map((item, index) => (
              <NavbarMenuItem className=" px-8 " key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === menuItems.length - 1
                        ? "danger"
                        : "foreground"
                  }
                  className="w-full"
                  href="#"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </div>
    </div>
  );
}
