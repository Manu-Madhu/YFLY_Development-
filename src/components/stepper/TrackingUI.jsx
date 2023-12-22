import React from "react";
import { TiTick } from "react-icons/ti";
import "./TrackingUI.css";

const TrackingUI = ({ currentStep, complete, steps }) => {
  return (
    <>
      <div className="flex justify-between w-full">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500 text-xs font-semibold mt-2">{step}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TrackingUI;
