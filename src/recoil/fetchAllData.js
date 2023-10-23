import {atom, selector} from "recoil";

import tokenInstance from "../axiosInstance";
import { data } from "./atom";

export const forceUpdateState = atom({
  key: "updateData",
  default: 0,
});


// Fetch all data from the API
export const fetchAllData = selector({
    key: 'fetchAllData',
    get: async ({get}) => {
      try {
       get(forceUpdateState)
        const response = await tokenInstance.get('address?fields=id,xid,name,email,phone,address,shipping_address,city,state,country');
     
        return response.data.data;
      } catch (error) {
        throw error;
      }
    },
  });
