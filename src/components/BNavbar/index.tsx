"use client"

import Image from "next/image";
import BFlex from "../BFlex";
import BAnchor from "../BAnchor";
import BText from "../BText";

import { usePathname } from 'next/navigation';

const BNavbar = () => {
  const items = [
    { label: "home", href: "/" },
    { label: "catálogo", href: "/catalogo" },
    { label: "solicitar", href: "/solicitar" },
    { label: "login", href: "/login" },
  ];

  const pathname = usePathname();

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
          {items.map((item, key) => {
            return (
              <BAnchor className={`${pathname.startsWith(item.href) ? "text-sky-500 font-bold" : ''}`} key={key} href={item.href}>
                <BText fontSize="base"> {item.label}</BText>
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
