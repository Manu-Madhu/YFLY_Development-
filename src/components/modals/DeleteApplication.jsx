import React from "react";
import { IoClose } from "react-icons/io5";
import instance from "../../utils/AxiosInstance";
import { toast } from "react-toastify";

const DeleteApplication = ({ setModal, data, setData, getTableData, route }) => {
  const CancelModal = () => {
    setModal(false);
    setData({});
  };

  const ConfirmDeletion = async () => {
    await instance
      .delete(`${route}/${data?._id}`)
      .then((res) => {
        toast.success(res?.data?.msg);
        getTableData();
        CancelModal();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.response?.data?.msg);
      });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/50 flex items-center justify-center z-50">
      <div className="relative bg-white mt-60  md:mt-0 rounded-lg p-5 md:p-10 m-5 flex flex-col gap-7">
        <h1 className="font-bold text-center capitalize text-xl text-primary_colors">
          Do you want to delete <br />{" "}
          
            <span className="">{data?.studentName}'s Application ?</span>

        </h1>
        <IoClose
          onClick={CancelModal}
          className="absolute right-3 top-3 rounded bg-primary_colors text-white cursor-pointer bg-primary"
        />
        <div className="w-full flex justify-evenly gap-3">
          <button
            onClick={CancelModal}
            className="p-2 px-5 rounded text-sm text-white bg-primary_colors w-full"
          >
            Cancel
          </button>

          <button
            onClick={ConfirmDeletion}
            className="p-2 px-5 rounded text-sm text-white bg-red-500 w-full"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteApplication;