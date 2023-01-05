import React from "react";
import spinner from "../../images/spinner.gif";
const Spinner = () => {
  return (
    <div className="text-center mt-5">
      <img
        src={spinner}
        width={180}
        className="text-center mx-auto"
        alt="loading ...."
      />
    </div>
  );
};

export default Spinner;
