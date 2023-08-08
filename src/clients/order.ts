import { SongOrder } from "@/types/song";
import apiInstance from "./";
import { Order } from "@/types/order";

export const createOrder = async (
  songs: SongOrder[]
): Promise<Order> => {
  const response = await apiInstance.post(`/order`, songs);
  return response.data;
};
