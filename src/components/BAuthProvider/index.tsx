"use client";

import { SessionProvider } from "next-auth/react";

const BAuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default BAuthProvider;
