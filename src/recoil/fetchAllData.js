import {selector} from "recoil";

import tokenInstance from "../axiosInstance";
import { data } from "./atom";
// Fetch all data from the API
export const fetchAllData = selector({
    key: 'fetchAllData',
    get: async () => {
      try {
       
        const response = await tokenInstance.get('address?fields=id,xid,name,email,phone,address,shipping_address,city,state,country');
     
        return response.data.data;
      } catch (error) {
        throw error;
      }
    },
  });
