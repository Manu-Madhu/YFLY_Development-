import React, { useState } from "react";
import { getAssignedWorksRoute } from "../../utils/Endpoint";
import { useSelector } from "react-redux";

import Applications from "../../components/employee/Profile/Applications";
import instance from "../../utils/AxiosInstance";

const AssignedWork = () => {
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
    getAssignedWorks();
  }, []);

  return (
    <div className="w-full h-full text-black ">
      <h1 className="text-primary_colors text-2xl font-bold">Tasks</h1>
      <div className="mt-5 w-full flex flex-wrap gap-4">
        <Applications data={works} />
      </div>
    </div>
  );
};

export default AssignedWork;
