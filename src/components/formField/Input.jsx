import React from "react";

const Input = ({ name, placeholder, type, changeHandler, value }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        className={`border text-xs p-3 focus:outline-none w-full rounded-lg`}
        placeholder={placeholder}
        onChange={changeHandler}
        value={value}
      />
    </>
  );
};

export default Input;
