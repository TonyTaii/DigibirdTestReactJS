import tokenInstance from "../axiosInstance";

export const editAddress = async (newData,id) => {
  try {
    // Make a POST request using Axios
    const response = await tokenInstance.put(`address/${id}`, newData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
