import React, { useState } from "react";
import { Address, EmpFormData, FormData } from "../../data/Dashboard";
import { IoClose } from "react-icons/io5";

import Input from "../formField/Input";
import TrackingUI from "../stepper/TrackingUI";

import axios from "../../utils/AxiosInstance";
import { employeeRegisterRoute, studentRegisterRoute } from "../../utils/Endpoint";
import { toast } from "react-toastify";


const RegistrationForm = ({ setModal, entity }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const steps = ["Student Info", "Over View"];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthDate: "",
    age: "",
    image: "",
    qualification: "",
    address: {
      houseName: "",
      city: "",
      state: "",
      pin: "",
    },
  });

  const [empFormData, setEmpFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthDate: "",
    education: "",
    department:"",
    address: {
      houseName: "",
      city: "",
      state: "",
      pin: "",
    },
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    if(entity === "Student"){
      if (["houseName","city","state","pin"].includes(name)) {
        const addressField = name.split("address")[1]; // Get the specific address field
        console.log(addressField);
        setFormData((prevFormData) => ({
          ...prevFormData,
          address: {
            ...prevFormData.address,
            [name]: value, // Update the specific address field
          },
        }));
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    }
    else if(entity === "Employee"){
      if (["houseName","city","state","pin"].includes(name)) {
        setEmpFormData((prevFormData) => ({
          ...prevFormData,
          address: {
            ...prevFormData.address,
            [name]: value, 
          },
        }));
      } else {
        setEmpFormData({
          ...empFormData,
          [name]: value,
        });
      }

    }

  };

  // Submit Handler
  const submitHandler = async(e) => {
    e.preventDefault();

    if(entity === "Student"){
      console.log(formData);
      if(!(formData?.name || formData?.email)) return;
  
      await axios.post(studentRegisterRoute, formData)
      .then((res)=>{
        console.log(res.data);
        setModal(false)
        toast.success(res?.data?.msg)
      })
      .catch((error)=>{
        console.log(error);
        toast.error(error?.response?.data?.msg)
      })

    }
    else if(entity==="Employee"){
      console.log(empFormData);
      if(!(empFormData?.name || empFormData?.email)) return;
  
      await axios.post(employeeRegisterRoute, empFormData)
      .then((res)=>{
        console.log(res.data);
        setModal(false)
        toast.success(res?.data?.msg)
      })
      .catch((error)=>{
        console.log(error);
        toast.error(error?.response?.data?.msg)
      })

    }
    
  };

  console.log("efd",empFormData)
  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-auto bg-black/50 flex items-center justify-center z-50">
      <div className="relative bg-white mt-60  md:mt-0 md:w-1/2 rounded-lg p-5  md:p-10 md:px-14 m-5">
        <h1 className="font-bold text-center text-xl text-primary_colors">
          Register New {entity}
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
                  {
                  entity === "Student"
                  &&
                  FormData.map((data) => (
                    <div key={data?.id} className="w-full md:w-1/2 p-1 py-2">
                      <Input
                        name={data?.name}
                        placeholder={data?.placeholder}
                        type={data?.type}
                        changeHandler={changeHandler}
                        value={formData[data?.name]}
                      />
                    </div>
                  ))
                  }
                  {
                  entity === "Employee"
                  &&
                  EmpFormData.map((data) => (
                    <div key={data?.id} className="w-full md:w-1/2 p-1 py-2">
                      <Input
                        name={data?.name}
                        placeholder={data?.placeholder}
                        type={data?.type}
                        changeHandler={changeHandler}
                        value={empFormData[data?.name]}
                      />
                    </div>
                  ))
                  
                  }
                  {Address.map((data) => (
                    <div key={data?.id} className="w-full md:w-1/2 p-1 py-2">
                      <Input
                        name={data?.name}
                        placeholder={data?.placeholder}
                        type={data?.type}
                        changeHandler={changeHandler}
                        value={(entity === "Student") ? formData?.address?.[data?.name] : empFormData?.address?.[data?.name]}
                      />
                    </div>
                  ))}
                </>
              )}
              {currentStep === 2 && (
                entity === "Student"
                ?
                <div className="flex flex-col  border w-full rounded p-5 ">
                  <h1>Name : <span>{formData?.name}</span></h1>
                  <h1>Email : <span>{formData?.email}</span></h1>
                  <h1>Phone : <span>{formData?.phone}</span></h1>
                  <h1>DOB : <span>{formData?.birthDate}</span></h1>
                  <h1>Qualification : <span>{formData?.qualification}</span></h1>
                  <h1>House Name : <span>{formData?.address?.houseName}</span></h1>
                  <h1>City : <span>{formData?.address?.city}</span></h1>
                  <h1>State : <span>{formData?.address?.state}</span></h1>
                  <h1>Pin : <span>{formData?.address?.pin}</span></h1>
                </div>
                :
                <div className="flex flex-col  border w-full rounded p-5 ">
                  <h1>Name : <span>{empFormData?.name}</span></h1>
                  <h1>Email : <span>{empFormData?.email}</span></h1>
                  <h1>Phone : <span>{empFormData?.phone}</span></h1>
                  <h1>DOB : <span>{empFormData?.birthDate}</span></h1>
                  <h1>Education : <span>{empFormData?.education}</span></h1>
                  <h1>Department : <span>{empFormData?.department}</span></h1>
                  <h1>House Name : <span>{empFormData?.address?.houseName}</span></h1>
                  <h1>City : <span>{empFormData?.address?.city}</span></h1>
                  <h1>State : <span>{empFormData?.address?.state}</span></h1>
                  <h1>Pin : <span>{empFormData?.address?.pin}</span></h1>
                </div>
              )}
              
            </div>

            {/* BUTTON */}
            <div className="text-white text-normal space-x-3 flex items-center justify-end mt-10">
              {currentStep > 1 && !complete && (
                <button
                  type="button"
                  className="bg-primary_colors p-2 px-5 rounded-lg hover:scale-105 ease-in-out duration-200"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                >
                  Back
                </button>
              )}
              {!complete && (
                <button
                  type="button"
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
              {complete &&
                <button
                  type="submit"
                  className="bg-primary_colors p-2 px-5 rounded-lg hover:scale-105 ease-in-out duration-200"
                  >
                  Submit
                </button>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
