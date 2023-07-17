import { ChildrenType, StyleCommonType } from "../../../types/components";

type BFlexType = {
  orientation?: "column" | "row";
  gap?: number;
} & ChildrenType &
  StyleCommonType;

const BFlex = ({
  children,
  className = "",
  orientation = "column",
  gap = 0,
}: BFlexType) => {
  const orientationCss = orientation === 'column' ? 'flex-col' : 'flex-row';
  const gapCss = gap > 0 ? `gap-${gap}` : "";
  return (
    <div className={`flex ${orientationCss} ${gapCss} ${className}`}>
      {children}
    </div>
  );
};

export default BFlex;
