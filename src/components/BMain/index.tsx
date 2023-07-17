import { ChildrenType } from "../../../types/components";

const BMain = ({ children }: ChildrenType) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {children}
    </main>
  );
};

export default BMain;
