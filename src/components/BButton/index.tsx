import { ChildrenType, StyleCommonType } from "../../../types/components";
import BFlex from "../BFlex";

const BButton = ({ children, className }: ChildrenType & StyleCommonType) => {
  return (
    <BFlex className="items-center">
      <button
        type="button"
        className={`text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 text-sm focus:outline-none focus:ring-sky-300 font-medium rounded-lg px-4 py-4 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800 ${className}`}
      >
        {children}
      </button>
    </BFlex>
  );
};

export default BButton;
