import Image from "next/image";
import BFlex from "../BFlex";
import BAnchor from "../BAnchor";
import BText from "../BText";

const BNavbar = () => {
  const items = [
    { label: "Solicitar", href: "/solicitar" },
    { label: "Ver catálogo", href: "/musicas" },
    { label: "Login", href: "/login" },
  ];

  return (
    <BFlex
      orientation="column"
      className="items-center md:justify-between py-4 md:flex-row gap-3 md:gap-0"
    >
      <BAnchor href={"/"}>
        <Image
          src="/logo.svg"
          alt="Logo"
          className="invert w-28 md:w-48"
          width={0}
          height={0}
          priority
        />
      </BAnchor>

      <nav className="flex flex-row gap-10 md-gap-4 items-center">
        {items.map((item, key) => {
          return (
            <BAnchor key={key} href={item.href}>
              <BText fontSize="base"> {item.label}</BText>
            </BAnchor>
          );
        })}
      </nav>
    </BFlex>
  );
};

export default BNavbar;
