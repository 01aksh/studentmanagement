import React from "react";

const Button = (props) => {
  const { value, onClick, name } = props;
  return (
    <>
      <button
        type="submit"
        name={name}
        value={value}
        onClick={onClick}
        className="btn btn-primary mb-3 "
      >
        {name}
      </button>
    </>
  );
};

export default Button;
