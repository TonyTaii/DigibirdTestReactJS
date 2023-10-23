import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { fetchAllData, forceUpdateState } from "../recoil/fetchAllData";
import { removeAddress } from "../recoil/removeAddress";

function Address() {
  const data = useRecoilValue(fetchAllData)
 
  console.log(data)
  const navigate = useNavigate();
  const dataUpdates = useSetRecoilState(forceUpdateState);
  const forceUpdate=() => dataUpdates((n) => n + 1)
 useEffect(forceUpdate,[])
  return (
    <div className="flex flex-col items-center w-full h-full gap-4 scroll-auto mb-4 ">
      <div className="font-bold text-center mt-2">Trang danh sách địa chỉ </div>
      <div className="w-[calc(100%-30px)] h-2 border-t-[3px] border-[rgb(196,196,54)]"></div>
      <div className=" w-[calc(100%-50px)] h-[200px] border-slate-300 border-2 flex justify-center items-center">
        <div className="w-[calc(100%-30px)] h-[calc(100%-30px)] border-slate-300 border-2 border-dashed flex flex-col justify-center items-center gap-5">
          <div className="w-[60px] h-[60px] border-slate-300 border-2 border-dashed rounded-full flex  justify-center items-center ">
            <svg
              className=" fill-slate-300"
              onClick={() => navigate("/add-address")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-3 h-3"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </svg>
          </div>
          <button
            onClick={() => navigate("/add-address")}
            type="button"
            className="py-1.5 px-3 mr-0  text-base bg-slate-300 font-medium  text-black focus:outline-none rounded-sm border border-gray-200 hover:bg-gray-100 hover:text-black hover:border-slate-950 focus:z-10 focus:ring-4 focus:ring-gray-200"
          >
            Thêm mới
          </button>
        </div>
      </div>
      {data.map((item) => (
        <div
          key={item.xid}
          className="w-[calc(100%-50px)]  border-slate-300 border-2 p-4 rounded-lg"
        >
          <div className="flex justify-between mb-3">
            <p className="font-bold">Họ và tên: {item.name}</p>{" "}
            <a onClick={
              async ()=>{  removeAddress(item.xid).then((result)=>forceUpdate())
           
          }}
            >
              Xóa
            </a>
          </div>
          <dl className="max-w-md text-gray-900 ">
            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-1 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Địa chỉ
              </dt>
              <dd className="text-sm text-black">{`${item.shipping_address} ${item.state} ${item.city}`}</dd>
            </div>
            <div className="flex flex-col py-3">
              <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Số điện thoại
              </dt>
              <dd className="text-sm text-black">{item.phone}</dd>
            </div>
            <div className="flex flex-col pt-3">
              <dt className="mb-1 text-gray-500 md:text-sm dark:text-gray-400 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                Địa chỉ email
              </dt>
              <dd className="text-sm text-black">{item.email}</dd>
            </div>
          </dl>
          <a
            onClick={() => {
              navigate(`/address/${item.xid}`);
            }}
            className="block mt-3 mb-1"
          >
            Chỉnh sửa
          </a>
        </div>
      ))}
    </div>
  );
}

export default Address;
