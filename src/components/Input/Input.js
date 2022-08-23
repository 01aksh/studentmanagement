import React from "react";

const Input = (props) => {
  const { placeholder, value, name, onChange } = props;
  return (
    <>
      <div>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          className=" fw-bold form-control border border-primary mb-3 text-success"
        />
      </div>
    </>
  );
};

export default Input;
