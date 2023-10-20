import {selector} from "recoil";
import axios from "axios";


// Fetch city/province list from the API
export const getCityList = selector({
    key: 'getCityList',
    get: async () => {
  try {
    const response = await axios.get("https://provinces.open-api.vn/api/?depth=2");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
  });


  