import { ChildrenType } from "@/types/components";
import BText from "../BText";

const BBadge = ({ children }: ChildrenType) => {
  return (
    <BText className="ml-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-sky-600 border-2 rounded-full border-transparent">
      {children}
    </BText>
  );
};

export default BBadge;
