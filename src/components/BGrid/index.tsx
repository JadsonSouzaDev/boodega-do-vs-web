import {
  ChildrenType,
  ClickableType,
  StyleCommonType,
} from "../../types/components";

const BGrid = ({
  cols,
  children,
  className,
  onClick,
}: { cols: number } & ChildrenType & StyleCommonType & ClickableType) => {
  return (
    <div
      className={`grid grid-cols-${
        cols ?? 1
      } gap-1 grid-flow-col auto-cols-fr ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default BGrid;
