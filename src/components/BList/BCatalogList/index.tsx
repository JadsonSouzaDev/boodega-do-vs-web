"use client";

import { useRouter } from "next/navigation";
import { Song } from "../../../../types/song";
import BList from "..";
import { secondsToFormatedString } from "@/utils/time";

const BCatalogList = ({ songs: rawSongs }: { songs: Song[] }) => {
  const songs = rawSongs.map((rawSong) => ({
    ...rawSong,
    duration: secondsToFormatedString(rawSong.duration),
  }));

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

  return <BList headers={headers} rows={songs} onClick={pushToSongPage} />;
};

export default BCatalogList;
