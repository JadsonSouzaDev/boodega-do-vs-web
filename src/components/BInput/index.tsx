import { HTMLInputTypeAttribute, LegacyRef } from "react";
import BFlex from "../BFlex";
import BText from "../BText";
import React from "react";

type BInputType = {
  id: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  error?: string;
  touched?: boolean;
  onBlur: (event: any) => void;
  onChange: (event: any) => void;
  value: string;
};
const BInput = React.forwardRef(
  (props: BInputType, ref: LegacyRef<HTMLInputElement>) => {
    const {
      id,
      label,
      type,
      required,
      error,
      touched,
      onBlur,
      onChange,
      value,
    } = props;
    
    return (
      <BFlex className="gap-2">
        <label htmlFor={id}>
          <BText>
            {label}
            {required ? "*" : ""}
          </BText>
        </label>
        <input
          id={id}
          ref={ref}
          name={id}
          type={type}
          className="border-b bg-transparent text-base w-full"
          onBlur={(e) => onBlur(e)}
          onChange={(e) => onChange(e)}
          value={value}
        />
        {touched && <BText className="text-red-500">{error}</BText>}
      </BFlex>
    );
  }
);

export default BInput;
