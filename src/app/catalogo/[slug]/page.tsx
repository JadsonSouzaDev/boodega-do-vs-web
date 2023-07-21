"use client";

import { useParams } from "next/navigation";
import BPage from "@/components/BPage";
import BSection from "@/components/BSection";
import BText from "@/components/BText";
import { songs } from "@/mocks/songs";
import BHeading from "@/components/BHeading";

export default function Song() {
  const params = useParams();
  const song = songs.find((s) => s.slug === params.slug);

  return (
    <BPage>
      <BSection id="search-bar" className=" py-5 md:py-10 px-2">
        <BHeading>{song?.name}</BHeading>
      </BSection>
    </BPage>
  );
}
