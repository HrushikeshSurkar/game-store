import React from "react";
import { IoChevronBackSharp } from "react-icons/io5";

const BackButton = ({ goBack }) => {
  return (
    <div>
      <button className="btn btn-light" onClick={goBack}>
        <IoChevronBackSharp className="mb-1" />
        Back
      </button>
    </div>
  );
};

export default BackButton;
