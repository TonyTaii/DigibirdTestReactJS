import {selectorFamily} from "recoil";

import tokenInstance from "../axiosInstance";

// Fetch all data from the API
export const fetchDataById = selectorFamily({
    key: 'fetchDataById',
    get: (id)=>async ({ get }) => {
      try {
        const response = await tokenInstance.get(`address/${id}?fields=id,xid,name,email,phone,address,shipping_address,city,state,country`);
     
        return response.data.data;
      } catch (error) {
        throw error;
      }
    },
  });
