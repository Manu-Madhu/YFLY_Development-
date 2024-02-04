import React, { useEffect, useState } from "react";
import LoadingData from "../loading/LoadingData";
import DeleteModal from "../modals/DeleteModal";
import { deactivateStudentRoute } from "../../utils/Endpoint";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import EditStudent from "../modals/EditStudent";

const StudentTable = ({ data , getData}) => {
  const [student, setStudent] = useState({})
  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)


  useEffect(()=>{
    window.scrollTo(0,0)
  })

  const handleDelete = (data)=>{
    console.log("studeentData",data)
    setStudent(data)
    setDeleteModal(true)
  }

  const handleEdit = (data)=>{
    setStudent(data)
    setEditModal(true)
  }

  return (
    <div className="relative max-h-screen shadow-md md:rounded-lg overflow-x-scroll md:overflow-hidden mb-3 w-full">
      <table className="w-full max-w-[1200px]  text-sm text-left ">
        <thead className="text-xs text-white uppercase bg ">
          <tr className="bg-primary_colors border-b  ">
            <th scope="row" className="px-6 py-4 font-bold  text-white">
              No.
            </th>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">Phone</th>
            <th className="px-6 py-4">Qualification</th>
            {/* <th className="px-6 py-4">application Id</th> */}
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data?.map((items, i) => (
              <tr
                key={items?._id}
                className="bg-white border-b text-ellipsis hover:bg-gray-50 text-black cursor-pointer "
              >
                <td className="px-6 py-4 ">{i + 1}</td>
                <td className="px-6 py-4 capitalize">{items?.name}</td>
                <td className="px-6 py-4">{items?.email}</td>
                <td className="px-6 py-4">{items?.phone}</td>
                <td className="px-6 py-4 capitalize">
                  {items?.qualification ? items?.qualification : "NIL"}
                </td>
                {/* <td className="px-6 py-4 truncate">
                  {items?.applicationId ? items?.applicationId : "NIL"}
                </td> */}
                <td className="px-6 py-4 truncate">

                      <div className="flex items-center justify-between gap-3">
                        <FaRegEdit
                          onClick={()=> handleEdit(items)}
                          size={23}
                          className="cursor-pointer hover:scale-105 ease-in-out duration-400"
                        />
                        <MdDeleteOutline
                          onClick={()=> handleDelete(items)}
                          size={23}
                          className="cursor-pointer hover:scale-105 ease-in-out duration-400 text-red-700"
                        />
                      </div>
                </td>
              </tr>
            ))
          ) : (
            <div className="w-full top-40 absolute items-center justify-center">
              <LoadingData />
            </div>
          )}
        </tbody>
      </table>

      {editModal && <EditStudent entityData={student} setData={setStudent} getTableData={getData}  setModal={setEditModal}  />}

      {deleteModal && <DeleteModal setModal={setDeleteModal} data={student} setData={setStudent} getTableData={getData} route={deactivateStudentRoute} />}
      

    </div>
  );
};

export default StudentTable;
