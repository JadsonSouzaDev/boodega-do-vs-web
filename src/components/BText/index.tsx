import colors from "@/constants/colors";
import variants from "@/constants/variants";
import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  isParagraph?: boolean;
  className?: string;
  fontSize?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  fontWeight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold";
  variant?: variants;
};

const Text = (props: TextProps) => {
  const sizes = {
    "3xl": "text-2xl md:text-3xl lg:text-4xl",
    "2xl": "text-xl md:text-2xl lg:text-3xl",
    xl: "text-lg md:text-xl lg:text-2xl",
    lg: "text-sm md:text-lg lg:text-xl",
    base: "text-sm md:text-base",
    sm: "text-sm",
    xs: "text-xs lg:text-sm",
  };

  const {
    children,
    isParagraph = false,
    className = "",
    fontSize = "sm",
    fontWeight = "normal",
    variant = "black",
  } = props;

  const customizedClass = `${sizes[fontSize]} font-${fontWeight} ${className} text-${colors[variant]}`;
  if (isParagraph) {
    return <p className={customizedClass}>{children}</p>;
  }
  return <span className={customizedClass}>{children}</span>;
};

export default Text;
