import React, { useState } from "react";
import Applications from "../../components/employee/Profile/Applications";
import instance from "../../utils/AxiosInstance";
import { getAEmployeeData } from "../../utils/Endpoint";
import { useSelector } from "react-redux";

const AssignedWork = () => {
  const [userInfo, setUserInfo] = useState();
  const userData = useSelector((state) => state.auth.userInfo);
  console.log(userData);

  useState(() => {
    instance
      .get(`${getAEmployeeData}/${userData?._id}`)
      .then((res) => {
        setUserInfo(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="w-full h-full text-black ">
      <h1 className="text-primary_colors text-2xl font-bold">Applications</h1>
      <div className="mt-5 w-full ">
        <Applications data={userInfo} />
      </div>
    </div>
  );
};

export default AssignedWork;
