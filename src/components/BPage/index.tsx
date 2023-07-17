import { ChildrenType } from "../../../types/components";
import BFlex from "../BFlex";
import BNavbar from "../BNavbar";

const BPage = ({ children }: ChildrenType) => {
  return (
    <BFlex orientation="column" className="w-full max-w-screen-lg">
      <BNavbar />
      {children}
    </BFlex>
  );
};

export default BPage;
