"use client"

import BPage from "@/components/BPage";
import BSection from "@/components/BSection";
import { signOut } from "next-auth/react"

export default function MyPlace() {
  return (
    <BPage>
      <BSection id="my-place">
      <button onClick={() => signOut()}>Sign out</button>
      </BSection>
    </BPage>
  );
}
