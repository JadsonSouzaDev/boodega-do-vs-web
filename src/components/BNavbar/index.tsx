"use client";

import Image from "next/image";
import BFlex from "../BFlex";
import BAnchor from "../BAnchor";
import BText from "../BText";

import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const BNavbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const logged = status === "authenticated";
  const firstName = session?.user?.name?.split(" ")[0].toLowerCase() ?? "";

  const routes = [
    {
      label: "cadastrar",
      href: "/cadastrar",
      active: pathname === "/cadastrar",
      logged: false,
    },
    {
      label: "login",
      href: "/login",
      active: pathname === "/login",
      logged: false,
    },
    {
      label: "solicitar",
      href: "/solicitar",
      active: pathname === "/solicitar",
      logged: true,
    },
    {
      label: firstName,
      href: "/minha-area",
      active: pathname === "/minha-area",
      logged: true,
    },
  ];

  return (
    <BFlex className="z-10">
      <BFlex
        orientation="column"
        className="items-center md:justify-between py-4 md:flex-row gap-3 md:gap-0 bg-white dark:bg-black lg:rounded-3xl md:pr-2"
      >
        <BAnchor href={"/"}>
          <Image
            src="/logo.svg"
            alt="Logo"
            className="dark:invert w-28 md:w-48 "
            width={0}
            height={0}
            priority
          />
        </BAnchor>

        <nav className="flex flex-row gap-10 md-gap-4 items-center">
          <BAnchor href="/">
            <BText
              fontSize="base"
              className={`${
                !routes.some((route) => route.active)
                  ? "text-sky-500 font-bold"
                  : ""
              }`}
            >
              catálogo
            </BText>
          </BAnchor>

          {routes
            .filter((route) => route.logged === logged)
            .map((route, key) => {
              return (
                <BAnchor key={key} href={route.href}>
                  <BText
                    fontSize="base"
                    className={`${
                      route.active ? "text-sky-500 font-bold" : ""
                    }`}
                  >
                    {route.label}
                  </BText>
                </BAnchor>
              );
            })}
        </nav>
      </BFlex>

      <hr />
    </BFlex>
  );
};

export default BNavbar;
