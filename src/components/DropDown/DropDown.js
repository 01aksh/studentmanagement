import React from "react";

const DropDown = (props) => {
  const { options, onChange, name, value } = props;
  return (
    <>
      <select
        name={name}
        options={options}
        onChange={onChange}
        value={value}
        className="form-select form-select-sm border border-primary text-success fw-bold"
      >
        <option>Choose gender</option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value} className="fw-bold">
              {option.label}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default DropDown;
