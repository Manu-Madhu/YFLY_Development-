import React, { useEffect, useState } from "react";
import Profile from "./Profile/Profile";
import DashCard from "./Profile/DashCard";
import Applications from "./Profile/Applications";
import { useParams } from "react-router-dom";
import {
  getAnEmployeeRoute,
  getAssignedWorksRoute,
  getEmpTaskMetrics,
} from "../../utils/Endpoint";
import ReqLoader from "../loading/ReqLoader";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const EmployeeProfile = () => {
  const axios = useAxiosPrivate();

  const { id } = useParams();
  const [loader, setLoader] = useState(false);
  const [empData, setEmpData] = useState({});
  const [works, setWorks] = useState([]);
  const [metrics, setMetrics] = useState([]);

  const getEmployee = async () => {
    await axios
      .get(`${getAnEmployeeRoute}/${id}`)
      .then((res) => {
        setEmpData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getEmpMetrics = async () => {
    await axios
      .get(`${getEmpTaskMetrics}/${id}`)
      .then((res) => {
        setMetrics(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAssignedWorks = async () => {
    try {
      setLoader(true);
      await axios
        .get(`${getAssignedWorksRoute}/${id}`)
        .then((res) => {
          console.log(res.data);
          setWorks(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    getEmployee();
    getEmpMetrics();
    getAssignedWorks();
  }, []);

  return (
    <div className="w-full text-black pt-10 pb-28">
      <h1 className="text-primary_colors text-2xl font-bold capitalize">
        Profile
      </h1>
      <div className="w-full mt-5 flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-2/6">
          <Profile data={empData} />
        </div>
        <div className="w-full md:w-4/6 space-y-5">
          <div>
            <DashCard data={metrics} />
          </div>
          <div>
            <Applications data={works} />
          </div>
        </div>
      </div>
      {loader && <ReqLoader />}
    </div>
  );
};

export default EmployeeProfile;
