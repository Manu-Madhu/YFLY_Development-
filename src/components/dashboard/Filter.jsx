import React, { useEffect, useState } from "react";
import { FilterData } from "../../data/Dashboard";
import axios from "../../utils/AxiosInstance";

import { toast } from "react-toastify";

const Filter = ({ setData,endPoint }) => {
  const [form, setForm] = useState({
    start_date: "",
    end_date: "",
    country: "",
    intake: "",
  });
  
  //   @DCS updating the form data
  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //   @DCS Submitting the data
  const submitData = async (e) => {
    e.preventDefault();
    const { start_date, end_date, country, intake } = form;
    try {
      const res = await axios.get(
        `${endPoint}?start_date=${start_date}&end_date=${end_date}&country=${country}&intake=${intake}`
      );
      // console.log(res);
      setData(res.data);
    } catch (error) {
      // console.error(error);
      toast.error(error.response.data.msg)
    }
  };

  return (
    <div>
      <form onSubmit={submitData} action="" className="flex flex-col md:flex-row  gap-3 md:gap-5 w-full">
        <input
          onChange={changeHandler}
          type="date"
          name="start_date"
          placeholder=""
          className="border border-primary_colors p-2  rounded-lg text-secondary text-normal focus:outline-none "
        />
        <input
          onChange={changeHandler}
          type="date"
          name="end_date"
          placeholder=""
          className="border border-primary_colors p-2  rounded-lg text-secondary text-normal focus:outline-none "
        />
        {FilterData.map((data) => (
          <select
            key={data?.id}
            onChange={changeHandler}
            name={data?.name}
            id=""
            className="border border-primary_colors p-2  rounded-lg text-secondary text-normal focus:outline-none "
          >
            <option value="">Select {data.name}</option>
            {data?.options?.map((data) => (
              <option key={data?.id} value={data?.name}>
                {data?.name}
              </option>
            ))}
          </select>
        ))}
        <button
          type="submit"
          className="bg-primary_colors p-2 px-6 rounded-lg text-white text-normal  hover:scale-105 ease-in-out duration-200"
        >
          Filter
        </button>
      </form>
    </div>
  );
};

export default Filter;
