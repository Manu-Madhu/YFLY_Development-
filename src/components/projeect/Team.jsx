import React from "react";
import TaskCard from "./task/TaskCard";
import TaskManagingCard from "./task/TaskManagingCard";

const Team = () => {
  return (
    <div className="container mx-auto w-full h-full  pt-10 pb-28">
      Task Manager
      <div className="container mx-auto w-full py-5 flex gap-5 overflow-auto">
        <div className="w-[280px] h-full bg-white rounded-lg p-5">
          {/* <div className="flex justify-between text-normalText text-sm font-medium">
            <h2>{team?.project?.projectTitle}</h2>
            <h2>
              Task
              <span className="ps-2">
                {completedTask.length}/{task.length}
              </span>
            </h2>
          </div>
          <div className="w-full py-5">
            {task.length !== 0 ? (
              task.map((items) => {
                return (
                  <TaskCard
                    key={items?._id}
                    editTask={setEditTaskData}
                    data={items}
                    updateTaskHandler={updateTaskHandler}
                  />
                );
              })
            ) : (
              <div className="flex flex-col items-center ">
                <PropagateLoader color="#36d7b7" size={10} />
              </div>
            )}
          </div> */}

          {/* Task Add button */}
          {/* {userInfo?.role === "Lead" && (
            <div
              className="flex items-center gap-3 text-normalText font-semibold hover:cursor-pointer 
              p-3 hover:rounded hover:bg-blue-200 hover:text-white ease-in-out duration-200"
              onClick={addNewTaskHandler}
            >
              <HiPlus size={20} className="hover:scale-105" />
              <h2>Add a task</h2>
            </div>
          )} */}
        </div>

        {/* Team members card */}
        {/* {team?.members &&
          team?.members.map((items) => (
            <TaskManagingCard
              key={items._id}
              editTask={setEditTaskData}
              modal={setModal}
              task={task}
              team={items}
            />
          ))} */}
      </div>
    </div>
  );
};

export default Team;
