"use client";

import { useRouter } from "next/navigation";

import BFlex from "@/components/BFlex";
import BPage from "../../components/BPage";
import BSection from "../../components/BSection";
import BSearch from "@/components/BSearch";
import BList from "@/components/BList";
import { songs } from "@/mocks/songs";
import { secondsToFormatedString } from "@/utils/time";

export default function Catalog() {
  const router = useRouter();
  const rows = songs.map((rawSong) => ({
    ...rawSong,
    duration: secondsToFormatedString(rawSong.duration),
  }));

  const headers = [
    { label: "nome", key: "name" },
    { label: "estilo", key: "style" },
    { label: "tonalidade", key: "tonality" },
    { label: "duração", key: "duration" },
  ];

  const pushToSongPage = (index: number) => {
    const song = rows.at(index);
    router.push(`/catalogo/${song?.slug}`);
  };

  return (
    <BPage>
      <BSection id="search-bar" className=" py-5 md:py-10">
        <BFlex className="w-full">
          <BSearch placeholder="procure por músicas, estilos ou artistas" />
        </BFlex>
      </BSection>
      <BSection id="list">
        <BFlex className="w-full">
          <BList headers={headers} rows={rows} onClick={pushToSongPage} />
        </BFlex>
      </BSection>
    </BPage>
  );
}
