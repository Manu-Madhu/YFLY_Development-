import React from "react";
import { IoCloseCircle } from "react-icons/io5";

const DocModal = ({setModal}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-auto bg-black/50 flex items-center justify-center z-50">
      <div className="relative bg-white mt-60  md:mt-0 md:w-1/2 rounded-lg p-5  md:p-10 md:px-14 m-5">
        <h1 className="font-bold text-center text-xl text-primary_colors">
          Add Document 
        </h1>
        <IoCloseCircle
          onClick={() => setModal(false)}
          className="absolute right-3 top-3 rounded bg-primary_colors text-white cursor-pointer"
        />
        <div className="flex flex-col w-full">
          <div className="flex items-center  my-8">
           
          </div>
          <form action="">
             <input type="text" className="border"/>
             <input type="file" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default DocModal;
