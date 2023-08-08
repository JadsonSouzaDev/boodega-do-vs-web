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

export const SongVersionProperties = {
  playback: { label: "playback", price: 14.99 },
  lr: { label: "lr", price: 19.99 },
  multitrack: { label: "multipista", price: 29.99 },
};

export type SongVersion = {
  song: Song;
  version: SongVersionEnum;
};
