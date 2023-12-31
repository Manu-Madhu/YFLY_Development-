import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { useSelector } from "react-redux";
import { getAnApplicationRoute } from "../../utils/Endpoint";

import axios from "../../utils/AxiosInstance";
import "../stepper/TrackingUI.css";

const TrackingUI = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [complete, setComplete] = useState(false);
  const [state, setState] = useState([]);

  const user = useSelector((state) => state.auth.userInfo);

  useEffect(() => {
    axios
      .get(`${getAnApplicationRoute}/${user?.applicationId}`)
      .then((res) => {
        setState(res.data);
        setCurrentStep(res.data.currentStep || 0);
        setComplete();
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]); 

  console.log(state);
  return (
    <>
      <div
        className={`w-full ${
          user.role === "student"
            ? "flex  items-start justify-start"
            : "flex  justify-between"
        }`}
      >
        {state?.steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item text-wrap text-center ${
              currentStep === i + 1 && "active"
            } ${(i + 1 < currentStep || complete) && "complete"} `}
          >
            <div className={`step ${user.role === "student" && "me-10"}`}>
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500  text-xs font-semibold mt-2">
              {step.name}{" "}
              {/* Assuming 'name' is a property in the 'step' object */}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TrackingUI;
