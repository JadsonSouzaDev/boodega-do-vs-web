import { ChildrenType, StyleCommonType } from "../../../types/components";

const BSection = ({ children, id, className }: { id: string } & ChildrenType & StyleCommonType) => {
  return (
    <section id={id} className={`flex flex-col items-center justify-between px-3 ${className}`}>
      {children}
    </section>
  );
};

export default BSection;
