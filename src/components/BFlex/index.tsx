"use client"

import {
  ChildrenType,
  ClickableType,
  StyleCommonType,
} from "../../types/components";

type BFlexType = {
  orientation?: "column" | "row";
  gap?: number;
} & ChildrenType &
  StyleCommonType &
  ClickableType;

const BFlex = ({
  children,
  className = "",
  orientation = "column",
  gap = 0,
  onClick,
}: BFlexType) => {
  const orientationCss = orientation === "column" ? "flex-col" : "flex-row";
  const gapCss = gap > 0 ? `gap-${gap}` : "";
  return (
    <div
      className={`flex ${orientationCss} ${gapCss} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default BFlex;
