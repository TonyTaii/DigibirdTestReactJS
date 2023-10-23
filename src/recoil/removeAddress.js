import tokenInstance from "../axiosInstance";

export const removeAddress = async (id) => {
  try {
    // Make a POST request using Axios
    const response = await tokenInstance.delete(`address/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
