import { RequestSong } from "../types/requestSong";
import apiInstance from "./";

export const requestSong = async (
  request: RequestSong
): Promise<RequestSong> => {
  const response = await apiInstance.post(`/song-requests`, request);
  return response.data;
};
