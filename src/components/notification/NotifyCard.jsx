import React from "react";
import { Link } from "react-router-dom";

const NotifyCard = ({
  item,
  selected,
  checkCard,
  setModal,
  changeReadStatus,
}) => {
  console.log(item);
  const notificationHandler = () => {
    // setModal(false);
    changeReadStatus("read");
  };
  return (
    <div
      className="relative w-full min-h-[70px] p-2 rounded-lg shadow cursor-pointer 
        flex gap-4 items-center"
    >
      <input
        type="checkbox"
        checked={selected?.includes(item?._id)}
        onChange={() => checkCard(item?._id)}
        className=""
      />

      <div className="">
        <Link
          onClick={notificationHandler}
          to={`${item?.route}`}
        >
          <span className="text-primary_colors truncate">{item?.title}</span>
          <p className="text-sm text-wrap">{item?.body}</p>
        </Link>
      </div>
    </div>
  );
};

export default NotifyCard;
