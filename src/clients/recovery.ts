import apiInstance from "./";

export const requestRecovery = async (email: string): Promise<void> => {
  const response = await apiInstance.post(
    `/recovery`,
    { email },
    { withCredentials: false }
  );
  return response.data;
};

export const updatePassword = async ({
  code,
  password,
}: {
  code: string;
  password: string;
}): Promise<void> => {
  const response = await apiInstance.patch(
    `/recovery/${code}`,
    { password },
    {
      withCredentials: false,
    }
  );
  return response.data;
};
