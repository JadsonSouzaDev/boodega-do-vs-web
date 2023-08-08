"use client"

import store from "@/redux/store";
import { ChildrenType } from "@/types/components";
import { Provider } from "react-redux";

const BReduxProvider = ({ children }: ChildrenType) => {
  return <Provider store={store}>{children}</Provider>;
};

export default BReduxProvider;
