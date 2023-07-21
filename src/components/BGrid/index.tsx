import { ChildrenType, StyleCommonType } from "../../../types/components";

const BGrid = ({
  cols,
  children,
  className,
}: { cols: number } & ChildrenType & StyleCommonType) => {
  return (
    <div className={`grid grid-cols-${cols ?? 1} ${className}`}>{children}</div>
  );
};

export default BGrid;
