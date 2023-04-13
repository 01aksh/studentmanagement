import React from "react";

const StateExample = (props) => {
  const { placeholder, heading } = props;
  return (
    <div>
      {heading}
      <br />
      <textarea placeholder={placeholder} className="col-3 "></textarea>
    </div>
  );
};

export default StateExample;
