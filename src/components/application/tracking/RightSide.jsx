import React, { useEffect, useState } from "react";
import { getAllComments, postComment } from "../../../utils/Endpoint";
import { useSelector } from "react-redux";

import axios from "../../../utils/AxiosInstance";
import EmptyData from "../../loading/EmptyData";
import { toast } from "react-toastify";

const RightSide = ({ data }) => {
  const createdDate = new Date(data?.createdAt).toLocaleString();
  const user = useSelector((state) => state?.auth?.userInfo);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    axios
      .get(`${getAllComments}/${data?._id}`)
      .then((res) => {
        setComments(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data?._id,setComments]);

  const submitHandle = async(e) => {
    e.preventDefault();
    console.log(comment)
    const message = {
      applicationId: data?._id,
      commentorId: user?._id,
      comment:comment
    }
    try{
      const response = await axios.post(postComment,message);
      console.log(response);
      toast.success(response?.data?.msg)
      setComments([
        ...comments,
        response?.data?.data
      ])
    }catch(error){
      console.log(error);
      toast.warning(error?.response?.data?.msg)
    }
  };

  return (
    <>
      {/* Application Info */}
      <div className="bg-white p-5 rounded-lg">
        <div className="flex justify-between">
          <h1 className="text-sm font-semibold">
            {/* 10/10/2023 - <span>02:30 pm</span> */}
            {createdDate}
          </h1>
          <h1 className="text-sm font-bold text-primary_colors">
            {/* Case closed - Offer Received Student not interested to Pay */}
            {data?.status}
          </h1>
        </div>
        <div className="mt-10 flex justify-between ">
          <div className="space-y-1">
            <h1 className="text-primary_colors font-semibold">
              {/* 123456/22-23 */}
              {data?._id}
            </h1>
            <h1 className="font-semibold capitalize">
              {/* Msc International Business */}
              {data?.program}
            </h1>
            <h1 className="capitalize text-sm">
              {/* Canterburry Christ University */}
              {data?.university}
            </h1>
          </div>
          <div className="flex items-end font-bold">
            {/* Jan 2023 */}
            {data?.intake}
          </div>
        </div>
      </div>

      {/* Comment typing Form */}
      <h1 className="my-3 font-bold text-slate-500 text-sm">Comments</h1>
      <div className="relative ">
        <form action="" onSubmit={submitHandle}>
          <textarea
            name="comment"
            id=""
            cols="30"
            rows="10"
            className="w-full h-20 rounded-lg focus:outline-none p-3 text-xs text-slate-300"
            placeholder="Enter your message"
            onChange={(e)=>setComment(e.target.value)}
          ></textarea>
          <button className="absolute bottom-5 right-4 bg-primary_colors text-white px-5 rounded p-1 text-center">
            send
          </button>
        </form>
      </div>

      {/* Comments */}
      <div className="mt-5 h-[250px] space-y-5 overflow-scroll">
        {comments?.length > 0 ? (
          comments?.map((items, i) => (
            <div key={i}>
              <div className="flex justify-between">
                <h1 className="text-xs font-semibold  capitalize">
                  {items?.commentorDetails?.name}
                </h1>
                <h1 className="text-xs ">
                  {new Date(items?.createdAt).toLocaleString()}
                </h1>
              </div>
              <div className="bg-primary_colors p-5 mt-2 rounded-lg">
                <p className="text-sm text-white">{items?.comment}</p>
              </div>
            </div>
          ))
        ) : (
          <div>
            <EmptyData data={"No Comments Are Available"} />
          </div>
        )}
      </div>
    </>
  );
};

export default RightSide;
