import React, { useEffect, useState } from "react";
import TaskManagingCard from "./task/TaskManagingCard";
import TaskMain from "./task/TaskMain";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import instance from "../../utils/AxiosInstance";
import { getAllTask, getProject } from "../../utils/Endpoint";
import EmptyData from "../loading/EmptyData";

const Team = () => {
  const [taskData, setTaskData] = useState();
  const [project, setProject] = useState();
  const { proId } = useParams();
  const user = useSelector((state) => state.auth.userInfo);

  const projectData = async () => {
    try {
      const response = await instance.get(`${getProject}/${proId}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    projectData();
    instance
      .get(`${getAllTask}/${proId}`)
      .then((res) => {
        setTaskData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [proId]);

  console.log(taskData);

  return (
    <div className="container mx-auto w-full h-full  pt-10 pb-28">
      <div className="flex  justify-between">
        <h1 className="text-primary_colors text-2xl font-bold">Task</h1>
        <button className="bg-primary_colors px-5 text-white rounded  text-sm p-2">
          Add Task
        </button>
      </div>
      <div className={`container mx-auto w-full py-5 flex flex-wrap gap-5 overflow-auto`}>
        {taskData && taskData?.length > 0 ? (
          taskData?.map((items, i) => (
            <TaskMain key={i} user={user} data={items} />
          ))
        ) : (
          <EmptyData data={"No Available Task..."} />
        )}
      </div>
    </div>
  );
};

export default Team;
