import React, { useEffect, useState } from "react";
import {
  getAStudentRoute,
  getAllComments,
  postComment,
} from "../../../utils/Endpoint";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import axios from "../../../utils/AxiosInstance";
import EmptyData from "../../loading/EmptyData";
import DocModal from "../../student/DocModal";
import Tippy from "@tippyjs/react";
import StatusModal from "../../employee/StatusModal";

const RightSide = ({ data, cb }) => {
  const createdDate = new Date(data?.createdAt).toLocaleString();
  const user = useSelector((state) => state?.auth?.userInfo);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [docModal, setDocModal] = useState(false);
  const [statusUpdate, setStatusUpdate] = useState(false);
  const [stepNumber, setStepNumber] = useState(null);

  let empTasks;
  if (user.role === "admin") {
    empTasks = data?.steps?.filter((task) => (task?.assignee ? true : false));
    console.log(empTasks);
  }

  let myTasks;
  if (user.role === "employee") {
    myTasks = data?.steps?.filter((task) => {
      if (task?.assignee === user?._id && task?.status !== "completed") {
        return true;
      } else {
        return false;
      }
    });
    console.log(myTasks, user);
  }

  useEffect(() => {
    axios
      .get(`${getAllComments}/${data?._id}`)
      .then((res) => {
        setComments(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data?._id]);

  const submitHandle = async (e) => {
    e.preventDefault();
    console.log(comment);
    const message = {
      applicationId: data?._id,
      commentorId: user?._id,
      comment: comment,
    };
    try {
      const response = await axios.post(postComment, message);
      console.log(response);
      toast.success(response?.data?.msg);
      setComments([response?.data?.data, ...comments]);
      setComment("");
    } catch (error) {
      console.log(error);
      toast.warning(error?.response?.data?.msg);
    }
  };

  return (
    <>
      {/* Application Info */}
      <h1 className="mb-3 font-semibold text-slate-500 text-sm text-gray-600">
        {
          user?.role === 'admin' ? "Application Status" : "Task Update"
        }
      </h1>
      <div className="w-full max-h-[220px] overflow-y-scroll space-y-2 border rounded-lg p-4">
        {user.role === "employee"
          ? myTasks?.map((task, i) => (
              <div key={i} className="bg-white p-5  rounded-lg ">
                <div className="flex justify-between">
                  <h1 className="text-sm font-semibold">{createdDate}</h1>
                  <div>
                    <h1 className="text-sm font-bold ">
                      <span>Status : </span>
                      <span className="text-primary_colors capitalize">
                        {task?.status}
                      </span>
                    </h1>
                  </div>
                </div>
                <hr className="my-5" />
                <div className="flex justify-between ">
                  <div className="space-y-1">
                    <h1 className="text-sm text-primary_colors font-semibold">
                      {data?._id}
                    </h1>
                    <h1 className="text-sm font-semibold capitalize">
                      {data?.program}
                    </h1>
                    <h1 className="capitalize text-sm">{data?.university}</h1>
                  </div>
                  <div className="flex flex-col justify-between capitalize">
                    <button
                      onClick={() => {
                        setStepNumber(task._id);
                        setStatusUpdate(true);
                      }}
                      className="w-full text-[13px] bg-primary_colors text-white p-1 px-5 rounded "
                    >
                      Update Status
                    </button>
                    <h1 className="font-bold text-end">
                      Step Number: {task?._id}
                    </h1>
                  </div>
                </div>
              </div>
            ))
          : empTasks?.map((empTask) => (
              <div className="bg-white p-5  rounded-lg">
                <div className="flex justify-between">
                  <h1 className="text-sm font-semibold">{createdDate}</h1>
                  <div>
                    <h1 className="text-sm font-bold ">
                      <span>Status : </span>
                      <span className="text-primary_colors capitalize">
                        {empTask?.status}
                      </span>
                    </h1>
                  </div>
                </div>
                <hr className="my-5" />
                <div className="flex justify-between ">
                  <div className="space-y-1">
                    <h1 className="text-sm text-primary_colors font-semibold">
                      Assignee Id : {empTask?.assignee}
                    </h1>
                    <h1 className="text-sm font-semibold capitalize">
                      Step : {empTask?.name}
                    </h1>
                    {/* <h1 className="capitalize text-sm">
                {data?.university}
              </h1> */}
                  </div>
                  <div className="flex flex-col justify-between capitalize">
                    {/* <button className="w-full text-[13px] bg-primary_colors text-white p-1 px-5 rounded ">
                  Click here
                </button> */}
                    <h1 className="font-bold text-end">
                      Step Number: {empTask?._id}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* Documents */}
      <h1 className="my-3 font-semibold text-slate-500 text-sm text-gray-600">
        Documents
      </h1>
      <div className="bg-white p-4 rounded-lg flex gap-2 relative overflow-x-scroll capitalize">
        {data?.documents?.length > 0 ? (
          data?.documents?.map((items, i) => (
            <Tippy key={i} className="" content={<div>{items?.name}</div>}>
              <div className="flex flex-col text-center text-[11px] cursor-pointer">
                <Link to={items?.location}>
                  <img
                    src={require("../../../assets/icon/file.png")}
                    alt="file"
                    className="w-14 border p-1 rounded"
                  />
                </Link>
                <span>{items?.name}</span>
              </div>
            </Tippy>
          ))
        ) : (
          <div className="w-full flex items-center justify-center">
            <EmptyData data={"No Document Are Available"} />
          </div>
        )}
        <button
          onClick={() => setDocModal(true)}
          className="absolute bottom-5 right-4 bg-primary_colors text-white text-[13px] px-5 rounded p-1 text-center"
        >
          Upload Document
        </button>
      </div>

      {/* Comment typing Form */}
      <h1 className="my-3 font-semibold text-slate-500 text-sm text-gray-600">
        Comments
      </h1>
      <div className="relative ">
        <form action="" onSubmit={submitHandle}>
          <textarea
            required
            name="comment"
            id=""
            cols="30"
            rows="10"
            className="w-full h-20 rounded-lg focus:outline-none p-3 text-xs text-slate-300"
            placeholder="Enter your message"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button className="absolute bottom-5 right-4 bg-primary_colors text-white text-[13px] px-5 rounded p-2 text-center">
            Send
          </button>
        </form>
      </div>

      {/* Comments */}
      <div className="my-3  max-h-[220px] space-y-3 overflow-scroll border p-3 rounded-lg">
        {comments?.length > 0 ? (
          comments?.map((items, i) => (
            <div key={i}>
              <div className="flex justify-between">
                <h1 className="text-xs font-medium text-gray-500 capitalize">
                  {items?.commentorDetails?.name}
                </h1>
                <h1 className="text-xs text-gray-500">
                  {new Date(items?.createdAt).toLocaleString()}
                </h1>
              </div>
              <div className="bg-primary_colors p-5 mt-2 rounded-lg">
                <p className="text-[13px] text-white">{items?.comment}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <EmptyData data={"No Comments Are Available"} />
          </div>
        )}
      </div>

      {docModal && (
        <DocModal cb={cb} setModal={setDocModal} applicationData={data} />
      )}
      {statusUpdate && (
        <StatusModal
          cb={cb}
          setModal={setStatusUpdate}
          stepNumber={stepNumber}
          applicationData={data}
        />
      )}
    </>
  );
};

export default RightSide;
