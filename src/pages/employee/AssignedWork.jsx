import React, { useState } from "react";
import Applications from "../../components/employee/Profile/Applications";
import instance from "../../utils/AxiosInstance";
import { getAEmployeeData, getAssignedWorksRoute } from "../../utils/Endpoint";
import { useSelector } from "react-redux";

const AssignedWork = () => {
  const [userInfo, setUserInfo] = useState();
  const [words,setWorks] = useState([])
  const userData = useSelector((state) => state.auth.userInfo);

  const getAssignedWorks = async()=>{
    await instance.get(`${getAssignedWorksRoute}/${userData?._id}`)
    .then((res)=>{
      console.log(res.data)
      setWorks(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  useState(() => {
    instance
      .get(`${getAEmployeeData}/${userData?._id}`)
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

      getAssignedWorks()
  }, []);

  
  return (
    <div className="w-full h-full text-black ">
      <h1 className="text-primary_colors text-2xl font-bold">Applications</h1>
      <div className="mt-5 w-full ">
        <Applications data={words} />
      </div>
    </div>
  );
};

export default AssignedWork;
