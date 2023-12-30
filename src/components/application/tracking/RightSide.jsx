import React from "react";

const RightSide = ({data}) => {
  const createdDate = new Date(data?.createdAt).toLocaleString()
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
        <div className="mt-10 flex justify-between">
          <div>
            <h1 className="text-primary_colors font-semibold">
              {/* 123456/22-23 */}
              {data?._id}
              </h1>
            <h1 className="font-bold">
              {/* Msc International Business */}
              {data?.program}
            </h1>
            <h1>
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
        <form action="">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-full h-20 rounded-lg focus:outline-none p-3 text-xs text-slate-300"
            placeholder="Enter your message"
          ></textarea>
          <button className="absolute bottom-5 right-4 bg-primary_colors text-white px-5 rounded p-1 text-center">
            send
          </button>
        </form>
      </div>

      {/* Comments */}
      <div className="mt-5 h-[250px] space-y-5 overflow-scroll">
        <div>
          <div className="flex justify-between">
            <h1 className="text-xs font-semibold  capitalize">Mr.Manu M</h1>
            <h1 className="text-xs ">18 Jan 2023 05:28 PM</h1>
          </div>
          <div className="bg-primary_colors p-5 mt-2 rounded-lg">
            <p className="text-sm text-white">
              Dear Team,Since the universities have stopped accepting new
              payments for Jan/Feb 2023 intake, we are closing this case.Let us
              know if the student is interested in deferring to the next intake,
              we will be happy to re-open the case for you. Thanks & Regards.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <h1 className="text-xs font-semibold  capitalize">Mr.Manu M</h1>
            <h1 className="text-xs ">18 Jan 2023 05:28 PM</h1>
          </div>
          <div className="bg-primary_colors p-5 mt-2 rounded-lg">
            <p className="text-sm text-white">
              Dear Team,Since the universities have stopped accepting new
              payments for Jan/Feb 2023 intake, we are closing this case.Let us
              know if the student is interested in deferring to the next intake,
              we will be happy to re-open the case for you. Thanks & Regards.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <h1 className="text-xs font-semibold  capitalize">Mr.Manu M</h1>
            <h1 className="text-xs ">18 Jan 2023 05:28 PM</h1>
          </div>
          <div className="bg-primary_colors p-5 mt-2 rounded-lg">
            <p className="text-sm text-white">
              Dear Team,Since the universities have stopped accepting new
              payments for Jan/Feb 2023 intake, we are closing this case.Let us
              know if the student is interested in deferring to the next intake,
              we will be happy to re-open the case for you. Thanks & Regards.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSide;
