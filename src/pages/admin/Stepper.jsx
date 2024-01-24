import React, { useEffect, useState } from "react";
import axios from "../../utils/AxiosInstance";
import { useParams } from "react-router-dom";
import { getAnApplicationRoute } from "../../utils/Endpoint";
import ApplicationCard from "../../components/application/ApplicationCard";
import EmptyData from "../../components/loading/EmptyData";

const Stepper = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  // Get Application Data
  const getApplication = async () => {
    await axios
      .get(`${getAnApplicationRoute}/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // DOM Mounting Hook
  useEffect(() => {
    window.scroll(0, 0);
    getApplication();
  }, [id]);

  return (
    <div className="container mx-auto w-full h-full pt-10 pb-28 ">
      {/* page intro */}
      <div className="application_card p-5 rounded-xl ">
        <h1 className="text-white md:text-2xl font-bold my-3">
          Welcome To The Application Of{" "}
          <span className="text-blue-500 capitalize"> {data?.studentName}</span>
        </h1>
        <div className="text-white mt-5 flex items-center justify-around gap-4">
          <div className="flex  flex-col justify-start w-full">
            <h5 className="font-bold">Name</h5>
            <h5 className="text-sm capitalize">{data?.studentName}</h5>
          </div>
          <div className="flex  flex-col justify-start w-full">
            <h5 className="font-bold">Country</h5>
            <h5 className="text-sm capitalize">{data?.country}</h5>
          </div>
          <div className="flex  flex-col justify-start w-full">
            <h5 className="font-bold">Assignee</h5>
            <h5 className="text-sm capitalize">{data?.assignee}</h5>
          </div>
          <div className="flex  flex-col justify-start w-full">
            <h5 className="font-bold">Program</h5>
            <h5 className="text-sm capitalize">{data?.program}</h5>
          </div>
          <div className="flex  flex-col justify-start w-full">
            <h5 className="font-bold">Intake</h5>
            <h5 className="text-sm capitalize">{data?.intake}</h5>
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="mt-5 w-full flex flex-wrap gap-5">
        {data?.steppers && data?.steppers.length > 0 ? (
          data?.steppers.map((items, i) => (
            <div className="w-full md:w-[310px]">
              <ApplicationCard data={items} />
            </div>
          ))
        ) : (
          <div>
            <EmptyData data={"No Application Available....."} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Stepper;
