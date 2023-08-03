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
  const firstName = session?.user?.name?.split(' ')[0].toLowerCase() ?? ""

  const routes = [
    { active: pathname === "/solicitar" },
    { active: pathname === "/login" },
    { active: pathname === "/minha-area" },
  ];

  return (
    <BFlex>
      <BFlex
        orientation="column"
        className="items-center md:justify-between py-4 md:flex-row gap-3 md:gap-0"
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
          <BAnchor
            className={`${
              !routes.some((item) => item.active)
                ? "text-sky-500 font-bold"
                : ""
            }`}
            href={"/"}
          >
            <BText fontSize="base">catálogo</BText>
          </BAnchor>

          <BAnchor
            className={`${routes[0].active ? "text-sky-500 font-bold" : ""}`}
            href={"/solicitar"}
          >
            <BText fontSize="base">solicitar</BText>
          </BAnchor>

          {!logged && (
            <BAnchor
              className={`${routes[1].active ? "text-sky-500 font-bold" : ""}`}
              href={"/login"}
            >
              <BText fontSize="base">login</BText>
            </BAnchor>
          )}

          {logged && (
            <BAnchor
              className={`${routes[2].active ? "text-sky-500 font-bold" : ""}`}
              href={"/minha-area"}
            >
              <BText fontSize="base">{firstName}</BText>
            </BAnchor>
          )}
        </nav>
      </BFlex>

      <hr />
    </BFlex>
  );
};

export default BNavbar;
