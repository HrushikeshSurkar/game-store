import { IoChevronBackSharp } from "react-icons/io5";
import "./BackButton.scss";

const BackButton = ({ goBack }) => {
  return (
    <div className="btn btn-light back-button" onClick={goBack}>
      <IoChevronBackSharp className="mb-1" />
      Back
    </div>
  );
};

export default BackButton;
