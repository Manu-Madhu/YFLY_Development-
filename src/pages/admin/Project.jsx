import React, { useCallback, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

import Multiselect from "multiselect-react-dropdown";
import ProjectCard from "../../components/projeect/ProjectCard";
import instance from "../../utils/AxiosInstance";
import {
  createProject,
  deleteProject,
  getAllProjects,
  getEmployeesRoute,
} from "../../utils/Endpoint";
import { toast } from "react-toastify";

const Project = () => {
  const [modal, setModal] = useState(false);
  const [employee, setEmployee] = useState([]);
  const [projectData, setProjectData] = useState([]);

  // Setting the input values to the state
  const [team, setTeam] = useState({
    name: "",
    startDate: "",
    endDate: "",
    members: [],
  });

  //Adding the employee to the team
  const selectHandler = (event) => {
    team.members = event.map((items) => {
      return items._id;
    });
  };

  // Removing the employee to the team
  const removeHandler = (event) => {
    team.members = event.map((items) => {
      return items._id;
    });
  };

  const inputChangeHandler = (e) => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  // Submit modal
  const submitHandler = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const response = await instance.post(createProject, team);
        if (response?.status === 200) {
          toast.success("Project Successfully Created");
          allProject();
          setModal(false);
        } else {
          toast.warning("Something Went Wrong");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error occurred");
      }
    },
    [createProject, team, setModal]
  );

  // fetch data from employee
  useEffect(() => {
    instance
      .get(getEmployeesRoute)
      .then((response) => {
        setEmployee(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const allProject = () => {
    instance
      .get(getAllProjects)
      .then((response) => {
        setProjectData(response?.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // fetch project Data
  useEffect(() => {
    allProject();
  }, []);

  const deleteHandler = async (proId) => {
    try {
      const response = await instance.delete(`${deleteProject}/${proId}`)
      console.log(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  console.log(projectData);

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

        <div className="mt-5 flex flex-col gap-5">
          {projectData?.map((items, i) => (
            <ProjectCard key={i} data={items} deleteHandler={deleteHandler} />
          ))}
        </div>
      </div>

      {/* project modal */}
      {modal && (
        <div className="fixed left-0 top-0 z-50 bg-black/60 w-full h-full flex items-center justify-center p-5">
          <div className="bg-white flex md:w-[400px] p-2 rounded relative">
            <IoClose
              onClick={() => setModal(false)}
              className="absolute bg-primary_colors text-white right-2 cursor-pointer"
            />
            <div className="flex flex-col items-center justify-center w-full mt-5 p-5">
              <h1 className="mb-5 text-primary_colors font-bold">
                New Project
              </h1>
              <form
                onSubmit={submitHandler}
                className="w-full flex flex-col gap-3 text-gray-700"
              >
                <input
                  onChange={inputChangeHandler}
                  required
                  type="text"
                  name="name"
                  className="border border-gray-500 text-sm p-2 font-thin rounded w-full focus:outline-none"
                  placeholder="Project Name"
                />
                <div className="flex gap-3">
                  <div>
                    <label htmlFor="" className="text-xs ">
                      {" "}
                      Starting Date
                    </label>
                    <input
                      onChange={inputChangeHandler}
                      type="date"
                      name="startDate"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="border border-gray-400 text-sm p-2 font-thin rounded w-full focus:outline-none"
                      placeholder="Project Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-xs ">
                      {" "}
                      Starting Date
                    </label>
                    <input
                      onChange={inputChangeHandler}
                      type="date"
                      name="endDate"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="border border-gray-400 text-sm p-2 font-thin rounded w-full focus:outline-none"
                      placeholder="Project Name"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <label htmlFor="" className="text-xs">
                      Select Employee
                    </label>
                    <Multiselect
                      required
                      onSelect={selectHandler}
                      onRemove={removeHandler}
                      options={employee}
                      displayValue="name"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-3 bg-primary_colors p-2 rounded text-white"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
