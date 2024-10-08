import React, { useState } from "react";
import { getAssignedWorksRoute } from "../../utils/Endpoint";
import { useSelector } from "react-redux";

import Applications from "../../components/employee/Profile/Applications";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const AssignedWork = () => {
  const instance = useAxiosPrivate();

  const [works, setWorks] = useState([]);
  const userData = useSelector((state) => state.auth.userInfo);

  const getAssignedWorks = async () => {
    await instance
      .get(`${getAssignedWorksRoute}/${userData?._id}`)
      .then((res) => {
        setWorks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useState(() => {
    window.scroll(0,0)
    getAssignedWorks();
  }, []);

  return (
    <div className="w-full min-h-screen text-black mt-[5vh]">
      <h1 className="text-primary_colors text-2xl font-bold">Tasks</h1>
      {
        works?.length > 0 
        ?
        <div className="mt-5 w-full flex flex-wrap gap-4">
          <Applications data={works} />
        </div>
        :
        <p className="text-center text-[#777] mt-9">No Tasks Available</p>
      }
    </div>
  );
};

export default AssignedWork;
