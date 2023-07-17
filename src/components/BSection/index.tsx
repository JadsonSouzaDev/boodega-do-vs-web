import { ChildrenType } from "../../../types/components";

const BSection = ({ children, id }: { id: string } & ChildrenType) => {
  return (
    <section id={id} className="flex flex-col items-center justify-between">
      {children}
    </section>
  );
};

export default BSection;
