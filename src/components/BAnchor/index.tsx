import Link from "next/link";
import { ReactNode } from "react";

type AnchorProps = {
  children: ReactNode;
  onlyCursor?: boolean;
  isExternal?: boolean;
  onClick?: () => void;
  className?: string;
  href?: string;
};

const Anchor: React.FunctionComponent<AnchorProps> = ({
  onlyCursor,
  isExternal,
  children,
  onClick,
  className = "",
  href,
}): JSX.Element => {
  if (onlyCursor) {
    return (
      <div
        onClick={onClick}
        className={`cursor-pointer hover:text-sky-500 ${className}`}
      >
        {children}
      </div>
    );
  }

  if (isExternal) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={"_blank"}
        className={`hover:text-sky-500 ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      as={href}
      href={href ?? "/"}
      onClick={onClick}
      className={`hover:text-sky-500 ${className}`}
    >
      {children}
    </Link>
  );
};

export default Anchor;
