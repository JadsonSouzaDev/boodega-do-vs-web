"use client";

import { useRouter } from "next/navigation";
import { Song } from "../../../../types/song";
import BList from "..";
import { secondsToFormatedString } from "@/utils/time";
import BFlex from "@/components/BFlex";
import BSearch from "@/components/BSearch";
import { useState } from "react";
import { getSongs } from "@/clients/songs";

const BSongsList = ({ songs: rawSongs }: { songs: Song[] }) => {
  const initialSongs = rawSongs.map((rawSong) => ({
    ...rawSong,
    duration: secondsToFormatedString(+rawSong.duration),
  }));

  const [songs, setSongs] = useState<Song[]>(initialSongs);

  const headers = [
    { label: "nome", key: "name" },
    { label: "estilo", key: "style" },
    { label: "tonalidade", key: "tonality" },
    { label: "duração", key: "duration" },
  ];

  const router = useRouter();

  const pushToSongPage = (index: number) => {
    const song = songs.at(index);
    router.push(`/${song?.slug}`);
  };

  const onSearch = async (name: string) => {
    const result = await getSongs(name);
    setSongs(result);
  };

  return (
    <BFlex className="gap-3 md:gap-8 py-3 md:py-8">
      <BFlex className="w-full">
        <BSearch
          placeholder="procure pelo nome da música"
          onSearch={onSearch}
        />
      </BFlex>
      <BList headers={headers} rows={songs} onClick={pushToSongPage} />
    </BFlex>
  );
};

export default BSongsList;
