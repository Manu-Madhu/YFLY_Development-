import React, { useEffect, useState } from "react";
import axios from "../../utils/AxiosInstance";
import { deactivateEmployeeRoute, getEmployeesRoute } from "../../utils/Endpoint";
import { useNavigate } from "react-router-dom";
import EmptyData from "../loading/EmptyData";
import Pagination from "../Pagination";
import DeleteModal from "../modals/DeleteModal";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import EditEmployee from "../modals/EditEmployee";

const Table = ({ department }) => {
  const [data, setData] = useState([]);
  const [empData, setEmpData] = useState({});
  const [page, setPage] = useState(1);
  const [entries, setEntries] = useState(10);
  const navigate = useNavigate();
  const [editModal, setEditModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)

  // console.log("department", department);

  const getData = async () => {
    await axios
      .get(
        `${getEmployeesRoute}?department=${department}&page=${page}&entries=${entries}`
      )
      .then((res) => {
        // console.log("data", res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (data)=>{
    setEmpData(data)
    setDeleteModal(true)
  }

  const handleEdit = (data)=>{
    setEmpData(data)
    setEditModal(true)
  }

  // console.log(data);
  return (
    <>
      <div className="relative md:max-h-screen w-full shadow-md md:rounded-lg overflow-x-scroll md:overflow-hidden mb-3">
        <table className="w-full  text-sm text-left ">
          <thead className="text-xs text-white uppercase bg ">
            <tr className="bg-primary_colors border-b ">
              <th scope="row" className="px-6 py-4  text-white  font-bold">
                full Name
              </th>
              <th className="px-6 py-4">department</th>
              <th className="px-6 py-4">email</th>
              <th className="px-6 py-4">phoneNumber</th>
              <th className="px-6 py-4 text-center ">Actions</th>
              <th className="px-6 py-4  t">
                <div className="font-bold text-white  hover:underline-none hover:text-blue-800 hover:cursor-pointer">
                  More
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 ? (
              data?.map((emp, i) => (
                <tr
                  key={i}
                  
                  className="bg-white border-b  hover:bg-gray-50 text-black cursor-pointer"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {emp?.name}
                  </td>
                  <td className="px-6 py-4">{emp?.department}</td>
                  <td className="px-6 py-4">{emp?.email}</td>
                  <td className="px-6 py-4">{emp?.phone}</td>
                  <td className="px-6 py-4 ">
                    <div className="flex items-center justify-between gap-3">
                        <FaRegEdit
                          onClick={()=>handleEdit(emp)}
                          size={23}
                          className="cursor-pointer hover:scale-105 ease-in-out duration-400"
                        />
                        <MdDeleteOutline
                          onClick={()=>handleDelete(emp)}
                          size={23}
                          className="cursor-pointer hover:scale-105 ease-in-out duration-400 text-red-700"
                        />
                      </div>
                  </td>
                  <td className="px-6 py-4  t">
                    <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline-none hover:text-blue-800 hover:cursor-pointer">
                      <span
                      onClick={(e) =>
                        navigate(`/admin/employee/profile/${emp._id}`)
                      }
                      >
                      View

                      </span>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <div className="w-full h-full absolute justify-center">
                <EmptyData data={"No Available Data "} />
              </div>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
        <Pagination
          Data={data}
          page={page}
          setPage={setPage}
          getMethod={getData}
        />
      </div>

      {editModal && <EditEmployee entityData={empData} setData={setEmpData} getTableData={getData}  setModal={setEditModal}  />}

      {deleteModal && <DeleteModal setModal={setDeleteModal} data={empData} setData={setEmpData} getTableData={getData} route={deactivateEmployeeRoute} />}
    </>
  );
};

export default Table;
