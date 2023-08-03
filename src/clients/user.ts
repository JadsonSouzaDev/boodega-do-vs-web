import { CreateUser } from "@/app/cadastrar/types/user";
import apiInstance from "./apiInstance";

export const createUser = async (user: CreateUser): Promise<CreateUser> => {
  const response = await apiInstance.post(`/users`, user, {
    withCredentials: false,
  });
  return response.data;
};
