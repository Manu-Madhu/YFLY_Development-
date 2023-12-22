import React, { useState } from "react";
import { Address, FormData } from "../../data/Dashboard";
import { IoClose } from "react-icons/io5";

import Input from "../formField/Input";
import TrackingUI from "../stepper/TrackingUI";

const RegistrationForm = ({ setModal }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const steps = ["Student Info", "Application Info", "Over View"];

  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-auto bg-black/50 flex items-center justify-center">
      <div className="relative bg-white mt-60  md:mt-0 md:w-1/2 rounded-lg p-5  md:p-10 md:px-14 m-5">
        <h1 className="font-bold text-center text-xl text-primary_colors">
          Register New Student
        </h1>
        <IoClose
          onClick={() => setModal(false)}
          className="absolute right-3 top-3 rounded bg-primary_colors text-white cursor-pointer"
        />
        <div className="flex flex-col w-full">
          <div className="flex items-center  my-8">
            <TrackingUI
              currentStep={currentStep}
              complete={complete}
              steps={steps}
            />
          </div>
          <form action="" onSubmit={submitHandler}>
            <div className="w-full flex flex-wrap">
              {/* Student Info */}
              {currentStep === 1 && (
                <>
                  {FormData.map((data) => (
                    <div key={data?.id} className="w-full md:w-1/2 p-1 py-2">
                      <Input
                        name={data.name}
                        placeholder={data.placeholder}
                        type={data.type}
                      />
                    </div>
                  ))}
                  {Address.map((data) => (
                    <div key={data?.id} className="w-full md:w-1/2 p-1 py-2">
                      <Input
                        name={data.name}
                        placeholder={data.placeholder}
                        type={data.type}
                      />
                    </div>
                  ))}
                </>
              )}
              {currentStep === 2 && (
                <>
                  {FormData.map((data) => (
                    <div key={data?.id} className="w-full md:w-1/2 p-1 py-2">
                      <Input
                        name={data.name}
                        placeholder={data.placeholder}
                        type={data.type}
                      />
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* BUTTON */}
            <div className="text-white text-normal space-x-3 flex items-center justify-end mt-10">
              {currentStep > 1 && !complete && (
                <button
                  className="bg-primary_colors p-2 px-5 rounded-lg hover:scale-105 ease-in-out duration-200"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                >
                  Back
                </button>
              )}
              {!complete && (
                <button
                  className="bg-primary_colors p-2 px-5 rounded-lg hover:scale-105 ease-in-out duration-200"
                  onClick={() => {
                    currentStep === steps.length
                      ? setComplete(true)
                      : setCurrentStep((prev) => prev + 1);
                  }}
                >
                  {currentStep === steps.length ? "Finish" : "Next"}
                </button>
              )}
              <button
                type="submit"
                className="bg-primary_colors p-2 px-5 rounded-lg hover:scale-105 ease-in-out duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
