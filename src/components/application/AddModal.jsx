import React from "react";
import { IoClose } from "react-icons/io5";

const AddModal = ({ setModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-auto bg-black/50 flex items-center justify-center z-50">
      <div className="relative bg-white mt-60  md:mt-0 md:w-1/2 rounded-lg p-5  md:p-10 md:px-14 m-5">
        <h1 className="font-bold text-center text-xl text-primary_colors">
          Register New Application
        </h1>
        <IoClose
          onClick={() => setModal(false)}
          className="absolute right-3 top-3 rounded bg-primary_colors text-white cursor-pointer"
        />
        <div className="flex flex-col w-full mt-6">
          <form action="" className="space-y-3">
              <div className="w-full flex flex-col md:flex-row gap-3">
                <select name="" id="" className="w-full border rounded p-2 focus:outline-none">
                  <option value="">Choose The Type</option>
                </select>
                <input type="text" placeholder="Enter the Country*" className="w-full p-2 border rounded focus:outline-none"/>
              </div>
              <div className="w-full flex flex-col md:flex-row gap-3">
                <input type="text" placeholder="University*" className="w-full p-2 border rounded focus:outline-none"/>
                <input type="text" placeholder="Program*" className="w-full p-2 border rounded focus:outline-none"/>
              </div>
              <div className="w-full flex flex-col md:flex-row gap-3">
                <select name="" id="" className="w-full border rounded p-2 focus:outline-none">
                  <option value="">Choose The Type</option>
                </select>
                <select name="" id="" className="w-full border rounded p-2 focus:outline-none">
                  <option value="">Choose The Type</option>
                </select>
              </div>
            {/* BUTTON */}
            <div className="text-white text-normal space-x-3 flex items-center justify-end ">
              <button
                type="submit"
                className="bg-primary_colors p-2 px-5 rounded-lg hover:scale-105 ease-in-out duration-200 mt-3"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
