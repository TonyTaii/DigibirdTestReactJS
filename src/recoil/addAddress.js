import tokenInstance from "../axiosInstance";

export const addAddress = async (newData) => {
  try {
    // Make a POST request using Axios
    const response = await tokenInstance.post("address", newData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
