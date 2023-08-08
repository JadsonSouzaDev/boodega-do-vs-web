import { Song, SongVersion } from "../types/song";
import apiInstance from "./";

export async function getSongsCached(): Promise<Song[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/songs`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getSongsVersionsCached(): Promise<SongVersion[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/song-versions`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export const getSongs = async (name: string): Promise<Song[]> => {
  const response = await apiInstance.get(`/songs?name=${name}`, {
    withCredentials: false,
  });
  return response.data;
};
