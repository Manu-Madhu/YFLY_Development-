import React, { useEffect } from "react";

const Pagination = ({ Data, page, setPage, getMethod }) => {
  const prevHandler = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const nextHandler = () => {
    if (Data?.length) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getMethod();
    };

    fetchData();
  }, [page]);

  return (
    <div className="flex border rounded  text-sm">
      {/* previous */}
      <button
        type="button"
        onClick={prevHandler}
        className={`border px-5 py-2 text-white
          ${
            page > 1 
            ?
            "border-primary_colors/50 bg-primary_colors"
            :
            "border-gray-300 bg-gray-300" 
          }
         rounded-s`}
      >
        Prev
      </button>

      {/*Page Count  */}
      <div className="border px-5 py-2 border-primary_colors/50 ">{page}</div>

      {/* Next Button */}
      <button
        type="button"
        onClick={nextHandler}
        className={`border px-5 py-2 text-white ${
          Data?.length
            ? "border-primary_colors/50 bg-primary_colors"
            : "border-gray-300 bg-gray-300"
        } rounded-e`}
        disabled={!Data?.length}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
