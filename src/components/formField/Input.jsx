import React from "react";

const Input = ({ name, placeholder, type }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        className={`border text-xs p-3 focus:outline-none w-full rounded-lg`}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
