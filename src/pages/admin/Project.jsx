import React, { useState } from "react";
import ProjectCard from "../../components/projeect/ProjectCard";
import { IoClose } from "react-icons/io5";

const Project = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="container mx-auto w-full h-full  pt-10 pb-28">
        <div className="flex  justify-between">
          <h1 className="text-primary_colors text-2xl font-bold">Project</h1>
          <button
            onClick={() => setModal(true)}
            className="bg-primary_colors text-white text-sm p-2 px-10 rounded-md hover:scale-105 ease-in-out duration-300"
          >
            New Project
          </button>
        </div>

        <div className="mt-5 ">
          <ProjectCard />
        </div>
      </div>

      {/* project modal */}

      {modal && (
        <div className="fixed left-0 top-0 z-50 bg-black/60 w-full h-full flex items-center justify-center p-5">
          <div className="bg-white flex p-2 w-full h-full md:w-1/2 md:h-1/2 rounded relative">
          <IoClose onClick={()=>setModal(false)} className="absolute bg-primary_colors text-white right-2 cursor-pointer"/>
          <h1>Hi iam modal </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
