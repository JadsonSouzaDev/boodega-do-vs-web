export type Song = {
  id: string;
  slug: string;
  name: string;
  style: string;
  tonality: string;
  duration: number | string;
  youtubeCode: string;
};

export type SongVersionEnum = "playback" | "lr" | "multitrack";

export type SongVersion = {
  id: string;
  key: SongVersionEnum;
  label: string;
  price: number;
};

export type SongOrder = {
  song: Song;
  version: SongVersionEnum;
};
