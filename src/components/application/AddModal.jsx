import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import {
  createApplicationRoute,
  getAllStudent,
  getEmployeesRoute,
} from "../../utils/Endpoint";
import { Intake } from "../../data/Dashboard";
import { useSelector } from "react-redux";

import axios from "../../utils/AxiosInstance";
import { EmployeeCards } from "../../data/Employee";
import { toast } from "react-toastify";

const AddModal = ({ setModal, ca }) => {
  const [data, setData] = useState([]);
  const [employee, setEmployee] = useState([]);
  const user = useSelector((state) => state?.auth?.userInfo);

  const [formData, setFormData] = useState({
    creator: user?._id,
    studentId: "",
    country: "",
    uniBased: [
      {
        university: "",
        partnership: "",
      },
    ],
    program: "",
    intake: "",
    partnership: "",
    assignee: "",
  });

  // State for managing dynamic university inputs
  const [dynamicUniInputs, setDynamicUniInputs] = useState([
    {
      university: "",
      partnership: "",
    },
  ]);

  // tracking the input changes
  const ChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // For department-wise employee data fetching
  const employeeCataChange = async (e) => {
    try {
      const response = await axios.get(
        `${getEmployeesRoute}?department=${e.target.value}`
      );
      setEmployee(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle changes in dynamic university inputs
  const handleDynamicUniChange = (index, e) => {
    const newDynamicUniInputs = [...dynamicUniInputs];
    newDynamicUniInputs[index][e.target.name] = e.target.value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      uniBased: newDynamicUniInputs,
    }));

    setDynamicUniInputs(newDynamicUniInputs);
  };

  // Add a new set of university inputs
  const handleAddUniInput = () => {
    setDynamicUniInputs([
      ...dynamicUniInputs,
      {
        university: "",
        partnership: "",
      },
    ]);
  };

  // initial-time student fetching
  useEffect(() => {
    axios
      .get(getAllStudent)
      .then((res) => {
        setData(res?.data?.filter((data) => !data?.applicationId));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // On Submit
  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(createApplicationRoute, formData);
      if (response?.status === 200) {
        toast.success(response?.data?.msg);
        ca();
        setModal(false);
      }
    } catch (error) {
      toast.error(error?.response?.data?.msg || "Something Went Wrong");
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-auto bg-black/50 flex items-center justify-center z-50">
      <div className="relative bg-white mt-60  md:mt-0 md:w-1/2 rounded-lg p-5  md:p-10 md:px-14 m-5">
        <h1 className="font-bold text-center text-xl text-primary_colors">
          Register New Application
        </h1>
        <IoClose
          onClick={() => setModal(false)}
          className="absolute right-3 top-3 rounded bg-primary_colors text-white cursor-pointer"
        />
        <div className="flex flex-col w-full mt-6">
          <form
            onSubmit={SubmitHandler}
            action=""
            className="space-y-3 text-sm text-gray-600"
          >
            <div className="w-full flex flex-col md:flex-row gap-3">
              <select
                name="studentId"
                id=""
                className="w-full border rounded p-2 focus:outline-none capitalize"
                required
                onChange={ChangeHandler}
              >
                <option value="">Choose The Student</option>
                {data?.map((items, i) => (
                  <option className="capitalize" key={i} value={items?._id}>
                    {items?.name}
                  </option>
                ))}
              </select>

              <input
                type="text"
                name="country"
                placeholder="Enter the Country*"
                className="w-full p-2 border rounded focus:outline-none"
                required
                onChange={ChangeHandler}
              />
            </div>

            <div className="w-full gap-3">
              {/* Dynamic university inputs */}
              {dynamicUniInputs.map((input, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col md:flex-row gap-3 pb-3"
                >
                  <input
                    type="text"
                    placeholder="University*"
                    name="university"
                    className="w-full p-2 border rounded focus:outline-none"
                    required
                    value={input.university}
                    onChange={(e) => handleDynamicUniChange(index, e)}
                  />
                  <select
                    name="partnership"
                    id=""
                    className="w-full border rounded p-2 focus:outline-none"
                    required
                    value={input.partnership}
                    onChange={(e) => handleDynamicUniChange(index, e)}
                  >
                    <option value="">Choose The Type</option>
                    <option value="partnered">Partnered</option>
                    <option value="non-partnered">Non-partnered</option>
                  </select>
                </div>
              ))}

              {/* Button to add new university inputs */}
              <button
                type="button"
                onClick={handleAddUniInput}
                className="bg-primary_colors px-5 text-white rounded p-2"
              >
                Add
              </button>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-3">
              <input
                type="text"
                name="program"
                placeholder="Program*"
                className="w-full p-2 border rounded focus:outline-none"
                required
                onChange={ChangeHandler}
              />
              <select
                name="intake"
                id=""
                className="w-full border rounded p-2 focus:outline-none"
                required
                onChange={ChangeHandler}
              >
                <option value="">Intake</option>
                {Intake.map((items, i) => (
                  <option key={i} value={items?.name}>
                    {items?.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-3">
              <select
                name=""
                id=""
                className="w-full border rounded p-2 focus:outline-none"
                onChange={employeeCataChange}
                required
              >
                <option value="">Select Category</option>
                {EmployeeCards.map((items, i) => (
                  <option key={i} value={items?.path}>
                    {items?.name}
                  </option>
                ))}
              </select>

              <select
                name="assignee"
                id=""
                className="w-full border rounded p-2 focus:outline-none"
                required
                onChange={ChangeHandler}
              >
                <option value="">Select Assignee</option>
                {employee?.length > 0 ? (
                  employee.map((items, i) => (
                    <option key={i} value={items?._id}>
                      {items?.name}
                    </option>
                  ))
                ) : (
                  <option>No Available Data</option>
                )}
              </select>
            </div>

            {/* BUTTON */}
            <div className="text-white text-normal space-x-3 flex items-center justify-end ">
              <button
                type="submit"
                className="bg-primary_colors p-2 px-5 rounded-lg hover:scale-105 ease-in-out duration-200 mt-3"
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

export default AddModal;
