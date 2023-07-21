import { ReactNode } from "react";
import colors from "@/constants/colors";
import variants from "@/constants/variants";

export type HeadingProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  variant?: variants;
  align?: "left" | "right" | "center" | "justify";
};

const BHeading = ({
  as = "h1",
  children,
  className,
  variant = "black",
  align = "left",
}: HeadingProps) => {
  const commonClass =
    "font-bold leading-normal md:leading-normal lg:leading-normal";

  const sizes = {
    h1: "text-2xl md:text-3xl lg:text-4xl",
    h2: "text-xl md:text-2xl lg:text-3xl",
    h3: "text-lg md:text-xl lg:text-2xl",
    h4: "text-base md:text-lg lg:text-xl",
    h5: "text-sm md:text-base lg:text-lg",
    h6: "text-xs md:text-sm lg:text-base",
  };

  const customizedClass = `${commonClass} ${sizes[as]} text-${colors[variant]} text-${align} ${className}`;

  switch (as) {
    case "h1":
      return <h1 className={customizedClass}>{children}</h1>;

    case "h2":
      return <h2 className={customizedClass}>{children}</h2>;

    case "h3":
      return <h3 className={customizedClass}>{children}</h3>;

    case "h4":
      return <h4 className={customizedClass}>{children}</h4>;

    case "h5":
      return <h5 className={customizedClass}>{children}</h5>;

    case "h6":
      return <h6 className={customizedClass}>{children}</h6>;
  }
};

export default BHeading;
