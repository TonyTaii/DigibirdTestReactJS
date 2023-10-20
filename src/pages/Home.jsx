import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";
import "../assets/css/index.css";
import axios from "axios";


function Home() {
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");
  
  const navigate = useNavigate();
  
  let navigateToAddress = false;

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://dev-pos.digibird.io/api/v1/front/sign-up-zalo",
        {
          id: phone,
          name: newName,
          company_id: 9,
        }
      );

      const responseData = response.data.data.token;
      localStorage.setItem('token', `${responseData}`);
      navigateToAddress = true;
    } catch (error) {
      console.error("Error:", error);
    }
   if (navigateToAddress){
    navigate('/address');
   }
  };

  return (
    <div className="container-home">
      <div>
        <a href="https://digibird.io" target="_blank">
          <img
            src="/public/logo-350x125.png"
            className="logo"
            alt="DigiBird logo"
          />
        </a>
      </div>
      <h1>DigiBird Test Exercise</h1>
      <div className="card" style={{ flexDirection: "row" }}>
        <div className="mt-4  mx-4  ">
          <label className=" m-2 mx-0 text-sm font-medium text-white flex">
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
          <label className=" m-2 mx-0 text-sm font-medium text-white flex">
            Số điện thoại
          </label>
          <input
            onChange={handlePhoneChange}
            value={phone}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nhập số điện thoại"
          />
        </div>
        <button
          onClick={handleOnSubmit}
          className="button-home"
          style={{ marginLeft: 10, marginTop: 20 }}
        >
          Login
        </button>
      </div>

      <p className="read-the-docs">Log in to view details exercise</p>
     
    </div>
  );
}

export default Home;
