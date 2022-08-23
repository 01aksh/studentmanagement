import React from "react";

const TextArea = (props) => {
  const { value, name, onChange, placeholder } = props;
  return (
    <>
      <textarea
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className=" form-control border border-primary mb-3 mr-10 text-success fw-bold"
      ></textarea>
    </>
  );
};

export default TextArea;
