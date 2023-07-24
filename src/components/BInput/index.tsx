import { HTMLInputTypeAttribute } from "react";
import BFlex from "../BFlex";
import BText from "../BText";

type BInputType = {
  label: string;
  type?: HTMLInputTypeAttribute;
};

const BInput = ({ label, type }: BInputType) => {
  return (
    <BFlex className="gap-2">
      <BText>{label}</BText>
      <input type={type} className="border-b bg-transparent text-base w-full" />
    </BFlex>
  );
};

export default BInput;
