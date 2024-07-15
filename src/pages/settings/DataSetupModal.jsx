import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import { adminDataRoute, dataRoute } from "../../utils/Endpoint";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import EditDeleteCard from "../../components/cards/EditDeleteCard";
import { useDispatch, useSelector } from "react-redux";
import { setAdminDefinedData } from "../../redux/slices/CommonDataReducer";

const DataSetupModal = ({ setModal, name }) => {
  const axiosInstance = useAxiosPrivate();
  const dispatch = useDispatch()

  const adminDefinedData = useSelector(state => state?.data?.adminDefinedData);

  const initResourceList = adminDefinedData?.find((item) => item?.name === name)?.list || [];

  const [resourceList, setResourcesList] = useState([...initResourceList])
  const [label, setLabel] = useState('')

  const fetchData = async () => {
    try {
      const res = await axiosInstance.get(`${dataRoute}/single?name=${name}`)

      if (res.status === 200) {
        const data = res?.data?.data?.list;
        setResourcesList([...data])
      }
    } catch (error) {
      console.log(error)
    }
  }

  const addElement = async () => {
    try {
      const res = await axiosInstance.post(adminDataRoute,
        { name: name, label: label });

      if (res.status === 200) {
        toast.success("New label added");
        const resourceData = res?.data?.data;
        setResourcesList((prev) => ([...resourceData?.list]))
        setLabel('')

        const newADD = adminDefinedData?.map((item) => {
          if (item?.name === name) {
            return resourceData
          }

          return item
        }) || []

        dispatch(setAdminDefinedData([...newADD]))
      }

    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.msg)

    }

  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-screen  bg-black/50 flex items-center justify-center z-50">
      <div className="relative bg-white mt-20  md:mt-0 md:w-1/3 rounded-lg p-5 md:p-10 m-5">
        <h1 className="font-bold text-center text-xl text-primary_colors capitalize">
          Update {name}
        </h1>
        <IoClose
          onClick={() => setModal(false)}
          className="absolute right-3 top-3 rounded text-white cursor-pointer bg-primary_colors"
        />
        <div className="w-full h-[330px] flex flex-wrap items-center justify-start mt-2 gap-2">

          <div className="flex gap-4 md:gap-5 w-full">
            <div className="w-full gap-2 flex flex-col items-start">
              

              <div className="w-full h-[200px] overflow-y-scroll mt-5">

                {
                  resourceList.length > 0
                  &&
                  <div className="w-full flex flex-wrap gap-4">
                    {
                      resourceList?.map((item, i) => (
                        <EditDeleteCard key={item?._id} resourceName={name} item={item}
                          data={resourceList} setData={setResourcesList}
                        />
                      ))
                    }
                  </div>

                }
              </div>


              <label htmlFor="" className="text-sm font-semibold mt-4">
                Enter new {name}
              </label>

              <div className="w-full gap-2 flex items-start">
                <input onChange={(e) => setLabel(e.target.value)}
                  value={label}
                  type="text"
                  name="label"
                  className="w-full border border-gray-300 rounded text-sm p-2 focus:outline-none"
                />

                <button
                  onClick={addElement}
                  className="p-2 px-5 rounded text-sm text-white bg-primary_colors"

                >
                  Add
                </button>

              </div>


            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

export default DataSetupModal