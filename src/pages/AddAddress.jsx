import React from "react";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { fetchAllData } from "../recoil/fetchAllData";
import { v4 as uuid4 } from "uuid";
import { addAddress } from "../recoil/addAddress";
import { data } from "../recoil/atom";
import { getCityList } from "../recoil/getCityList";
import { Link, useNavigate } from "react-router-dom";
function AddAddress() {
  const cityList = useRecoilValue(getCityList);
  const [province, setProvince] = useState("Chọn tỉnh/thành phố");
  const [districts, setDictrics] = useState("Chọn quận/huyện");
  const [newName, setNewName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const dataGet = useRecoilValue(fetchAllData);
  const [newData, setNewData] = useRecoilState(data);
  const [isDone,setIsDone]=useState(false)
 
  useEffect(() => {
    setNewData((data) => dataGet);
  }, [dataGet]);

  const handleSelectProvinceChange = (e) => {
    setProvince(e.target.value);
  };
  const handleSelectDictricsChange = (e) => {
    setDictrics(e.target.value);
  };
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const resetForm = () => {
    setNewName("");
    setPhone("");
    setProvince("");
    setDictrics("");
    setAddress("");
    setEmail("");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(newData);
    addAddress({
      xid: uuid4(),
      phone: phone,
      email: email,
      name: newName,
      city: province,
      state: districts,
      shipping_address: address,
      address: address,
      zipcode: 4,
      country: "VN",
    });

    setIsDone(true);
    resetForm();
  };

  return (
    <div className="flex flex-col items-center w-full h-full gap-4 scroll-auto mb-4 ">
      <div className="font-bold text-center mt-2">Trang thêm mới địa chỉ </div>
      <div className="w-[calc(100%-50px)]  border-slate-300 border-2 rounded-md flex flex-col divide-y-2 ">
        <div className="w-full text-lg font-bold p-3 pl-5">
          Thêm mới địa chỉ
        </div>
        <form className="">
          <div className="mt-4  mx-4  ">
            <label className=" m-2 mx-0 text-sm font-medium text-gray-900 flex">
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              Họ và tên
            </label>
            <input
              onChange={handleNameChange}
              value={newName}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Nhập họ tên"
            />
          </div>

          <div className="mt-4  mx-4 ">
            <label className=" m-2 mx-0 text-sm font-medium text-gray-900 flex">
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
            </label>
            <input
              onChange={handlePhoneChange}
              value={phone}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Nhập số điện thoại"
            />
          </div>
          <div className="mt-4  mx-4 ">
            <label className=" m-2 mx-0 text-sm font-medium text-gray-900 flex">
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              Địa chỉ email
            </label>
            <input
              onChange={handleEmailChange}
              value={email}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Nhập địa chỉ email"
            />
          </div>

          <div className="mt-4  mx-4 ">
            <label className=" m-2 mx-0 text-sm font-medium text-gray-900 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-1 "
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />{" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />{" "}
              </svg>
              Tỉnh, thành phố
            </label>
            <select
              onChange={handleSelectProvinceChange}
              value={province}
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            >
              <option selected disabled hidden>
                Chọn tỉnh/thành phố
              </option>
              {cityList.length > 0 ? (
                cityList.map((data) => (
                  <option key={data.id}>{data.name}</option>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </select>
          </div>
          <div className="mt-4  mx-4 ">
            <label className=" m-2 mx-0 text-sm font-medium text-gray-900 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-1 "
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />{" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />{" "}
              </svg>
              Quận/huyện
            </label>
            <select
              onChange={handleSelectDictricsChange}
              value={districts}
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            >
              <option selected disabled hidden>
                Chọn quận/huyện
              </option>
              {cityList.length > 0 && province !== "" ? (
                cityList
                  .filter((data) => data.name == province)[0]
                  ?.districts.map((data) => <option>{data.name}</option>)
              ) : (
                <p>Loading...</p>
              )}
            </select>
          </div>
          <div className="mt-4  mx-4 ">
            <label className=" m-2 mx-0 text-sm font-medium text-gray-900 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-1 "
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />{" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />{" "}
              </svg>
              Địa chỉ cụ thể
            </label>
            <input
              onChange={handleAddressChange}
              value={address}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Nhập số điện thoại"
            />
          </div>
          {isDone? <p className="m-2 mb-0 ml-4">Đã Thêm Thành Công !</p>:''}
          <button
            onClick={handleOnSubmit}
            className=" w-[150px]  text-black text-xl font-medium bg-[rgba(247,235,67,0.88)]   rounded-lg    m-6 mx-4 p-2 text-center"
          >
            Lưu thông tin
          </button>
          <Link to='/address'>
          <button
            
            className=" w-[150px]  text-black text-xl font-medium bg-[rgba(247,235,67,0.88)]   rounded-lg    m-6 mx-4 p-2 text-center"
          >
            Trở lại
          </button></Link>
        </form>
      </div>
    </div>
  );
}

export default AddAddress;
