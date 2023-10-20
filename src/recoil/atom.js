import { atom } from "recoil";


export const currentIdState = atom({
  key: "currentId",
  default: null,
});

export const data = atom({
    key: "data",
    default: [],
  });
  
 
  export const tokenState = atom({
    key: "token",
    default:'',
  });
  