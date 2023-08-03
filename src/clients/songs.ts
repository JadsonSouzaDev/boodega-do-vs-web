import { Song } from "../../types/song";
import apiInstance from "./apiInstance";

export async function getSongsCached(): Promise<Song[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/songs`, {
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
