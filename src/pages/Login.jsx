import React, { useState } from "react";

import logo from "../assets/logo.png";
import axios from "../utils/AxiosInstance";
import { loginPost } from "../utils/Endpoint";
import { toast } from "react-toastify";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(data, "data from the from");
    try {
     const response = await axios.post(loginPost,data);
     toast.success(response?.data?.email && "Successfully Loged in")
     console.log(response)
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg)
    }
  };

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full h-screen relative flex items-center justify-center overflow-hidden">
      <img
        src={require("../assets/images/Login_bg.png")}
        alt="bgImage"
        className="absolute bottom-0 md:-bottom-0 text-center object-contain -z-10"
      />
      <div className="container mx-auto h-full">
        <div className="md:mx-10 w-full flex items-center ms:items-start justify-center md:justify-start ">
          <img src={logo} alt="Logo" className="object-container z-50 " />
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="data  w-full m-5 bg-white border md:w-1/4 rounded p-10 shadow-lg">
            <form onSubmit={submitHandler} className="flex flex-col  py-5">
              <h2 className="text-[#0061B2] text-xl font-bold text-center mb-5">
                Login
              </h2>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col text-sm">
                  <label htmlFor="" className="text-xs">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    required
                    className="border p-2 mt-1 focus:outline-none rounded "
                  />
                </div>
                <div className="flex flex-col text-sm">
                  <label htmlFor="" className="text-xs">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={changeHandler}
                    required
                    className="border p-2 mt-1 focus:outline-none rounded"
                  />
                  <div className="w-full flex justify-end">
                    <span className="text-[10px] mt-1 hover:text-blue-700 cursor-pointer">
                      Forgot Password?
                    </span>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#0061B2] text-white text-xs p-3 my-3 rounded hover:scale-105 ease-in-out duration-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
